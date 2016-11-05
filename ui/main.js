console.log('Loaded!');
// changing the text of main text

var element = document.getElementById("main-text"
 );
 
 element.innerHTML = "hello i am dino";
 
 //move the dino
 
 var img = document.getElementById("dino"
 );
 img.onclick = function()  {
     
   img.style.marginLeft = '100px';  
 };