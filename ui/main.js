console.log('Loaded!');
// changing the text of main text

var element = document.getElementById("main-text"
 );
 
 element.innerHTML = "new value";
 
 //move the dino
 
 var img = document.getElementById("dino"
 );
 img.onclick = function()  {
     
   img.style.marginleft = '100px';  
 };