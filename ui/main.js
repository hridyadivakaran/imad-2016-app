console.log('Loaded!');
// changing the text of main text

var element = document.getElementById("main-text"
 );
 
 element.innerHTML = "hello i am dino";
 
 //move the dino
 
 var img = document.getElementById("dino"
 );
 
 var marginLeft = 0;
 function marginRight() {
     marginLeft = marginLeft + 10;
     img.style.marginLeft = marginLeft + 'px'
     
 }
 
 img.onclick = function()  {
    var interval = setInterval(moveRight, 100);  
     
 };