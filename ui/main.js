//counter code

var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLhttpRequest();
    
    request.onreadystateChange = function() {
     if(request.readyState === XMLhttpRequest.DONE) {
      if(request.status === 200){
           var name = request.responseText;
           name = JSON.parse(names);
    var list ='';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
      }
     }
    };
    
    request.open('GET','http://hridyadivakaran.imad.hasura-app.io/Submit-name?name=' + name, true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var Submit = document.getElementById('Submit_btn');
Submit.onclick = function() {
    
   
};