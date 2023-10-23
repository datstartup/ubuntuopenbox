---
title: "JJY Japanese Time"
header:
categories:
  - tips
tags:
  - JJY
  - casio
  - radio
  - controlled
---

<button type="button" id="push" style="width:400px;height:60px;">
    <font size="5" face="verdana" color="black">Begin to transmit</font>
   </button>
   <p>
   </p>
   <script src="jjy.js"></script>
   <script type="text/javascript" >
       console.log("script loaded");
       var btn = document.getElementById("push");
     
       // el.onClick(function(){
       //   var jjy = JJY();
       //   console.log("run");
       //   jjy.run();
       // })

       btn.addEventListener("click", function(){
         var jjy = JJY();
         console.log("run");
         jjy.run();
         document.getElementById("push").disable=true;
       }, {once : true});


</script>