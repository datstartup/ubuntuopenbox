/*
JJY.js: JJY time signal emulation/transmission library

Copyright (c) @plugnburn (831337.xyz) 2017
@license ISC
*/

function JJY(distorter) { //JJY constructor
  distorter = parseFloat(distorter)

  //create pre-filled constant array for efficient copying
  var codeProto = '200000000200000000020000000002000000000200000000020000000002'.split('').map(Number)

  function toBCD(val) {
    return val%10 + (((val/10)%10)<<4) + ((val/100)<<8)
  }

  function calcParity(val){
    var i = 0;
    while(val) {
      i ^= val & 1
      val >>>= 1
    }
    return i
  }

  function jjyTimecode(timeObj) { //generate a JJY timecode from any given Date object
    var ts = {
      min: toBCD(timeObj.getUTCMinutes()),
      hour: toBCD(timeObj.getUTCHours()),
      day: toBCD(Math.floor((timeObj - new Date(timeObj.getUTCFullYear(),0,0,0,0))/864e5)),
      year: toBCD(timeObj.getUTCFullYear() % 100),
      weekDay: timeObj.getUTCDay()
    }, timeCode = codeProto.slice();

    //populate minute
    timeCode[1] = (ts.min>>6)&1
    timeCode[2] = (ts.min>>5)&1
    timeCode[3] = (ts.min>>4)&1
    timeCode[5] = (ts.min>>3)&1
    timeCode[6] = (ts.min>>2)&1
    timeCode[7] = (ts.min>>1)&1
    timeCode[8] = ts.min&1
    //populate hour 
    timeCode[12] = (ts.hour>>5)&1
    timeCode[13] = (ts.hour>>4)&1
    timeCode[15] = (ts.hour>>3)&1
    timeCode[16] = (ts.hour>>2)&1
    timeCode[17] = (ts.hour>>1)&1
    timeCode[18] = ts.hour&1
    //populate day number
    timeCode[22] = (ts.day>>9)&1
    timeCode[23] = (ts.day>>8)&1
    timeCode[25] = (ts.day>>7)&1
    timeCode[26] = (ts.day>>6)&1
    timeCode[27] = (ts.day>>5)&1
    timeCode[28] = (ts.day>>4)&1
    timeCode[30] = (ts.day>>3)&1
    timeCode[31] = (ts.day>>2)&1
    timeCode[32] = (ts.day>>1)&1
    timeCode[33] = ts.day&1
    //populate parity bits
    timeCode[36] = calcParity(ts.hour)
    timeCode[37] = calcParity(ts.min)
    //populate year
    timeCode[41] = (ts.year>>7)&1
    timeCode[42] = (ts.year>>6)&1
    timeCode[43] = (ts.year>>5)&1
    timeCode[44] = (ts.year>>4)&1
    timeCode[45] = (ts.year>>3)&1
    timeCode[46] = (ts.year>>2)&1
    timeCode[47] = (ts.year>>1)&1
    timeCode[48] = ts.year&1
    //populate day of the week
    timeCode[50] = ts.weekDay>>2
    timeCode[51] = (ts.weekDay>>1)&1
    timeCode[52] = ts.weekDay&1
    return timeCode  
  }

  function getJJYTimeCode(timeObj) {
    var timeRep = timeObj || new Date(Date.now() + 324e5);
    return {
      bitCode: jjyTimecode(timeRep),
      cs: timeRep.getUTCSeconds()
    }
  }
  
  return {
    getTimeCode: getJJYTimeCode, //exposed for getting timecode information in non-browser environments
    run: function(tObj) { //browser-only function, requires Web Audio API support 
      var ctx = new (window.AudioContext || window.webkitAudioContext)(),
          sr = ctx.sampleRate,
          opFreq = 40000/3,
          rp = opFreq/sr, bufSet = [], pwm = [.8, .5, .2];
      if(isNaN(distorter) || distorter < 2)
        distorter = sr/3

      ctx.createBuffer = ctx.createBuffer || ctx.webkitCreateBuffer;
      ctx.createBufferSource = ctx.createBufferSource || ctx.webkitCreateBufferSource;
      performance.now = performance.now || performance.webkitNow || function(){return (new Date).getTime()}

      secondTick = (function(tm){
        var px = 0, py = 0, dx = 0;
        return function(cb){
          px = performance.now()
          setTimeout(function(){
            dx = (py = performance.now()) - px - tm
            px = py
            cb()
          }, tm - dx/2)
        }
      })(1000)

      // pre-populate the buffers
      for(var i=0;i<3;i++) {
        var sLen = sr*pwm[i];
        bufSet[i] = ctx.createBuffer(1, sLen, sr);
        var cData = bufSet[i].getChannelData(0);
        for(var k=0;k<sLen;k++)
          cData[k] = Math.floor(distorter*Math.sin(2 * Math.PI * k * rp))/distorter
      }
      // play back the timecode
      var renderMinute = function() {
        var sigInfo = getJJYTimeCode(tObj), currentIndex = sigInfo.cs,
            renderSecond = function() {
              secondTick(currentIndex<59 ? renderSecond : renderMinute)
              var bs = ctx.createBufferSource()
              bs.buffer = bufSet[sigInfo.bitCode[currentIndex]]
              bs.connect(ctx.destination)
              bs.start()
              currentIndex++
            }
        renderSecond()
      }
      renderMinute()
    }
  }
}

if(typeof module !== 'undefined' && module.exports && this.module !== module)
  module.exports = JJY()