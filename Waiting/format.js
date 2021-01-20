function myFunction() {
  let cert = SlidesApp.openById('1MK6J6HA_FrdxEQAF81o1hUibk3WAj7MKwB6WPsU8ix0');
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Form Responses 2');
  let data = sh.getRange("A2:D2").getValues();
  
  let name = data[0][3];
  let date = data[0][0];
  
  let slides = cert.getSlides();
  let template = slides[0];
  
  template.duplicate();
  slides = cert.getSlides(); 
  let newSlide = slides[1];
  
  let shapes = newSlide.getShapes();
  
  shapes.forEach(shape =>{
    shape.getText().replaceAllText('{{name}}',name);
    shape.getText().replaceAllText('{{date}}',date);
 })
  
}