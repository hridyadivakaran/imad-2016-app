//counter code

var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLhttpRequest();
    
    request.onreadystateChange = function() {
     if(request.readyState === XMLhttpRequest.DONE) {
      if(request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
      }
     }
    };
    
    request.open('GET','http://hridyadivakaran.imad.hasura-app.io/counter', true);
    request.send(null);
};
var button = document.getElementById("link");

button.onclick = function() {
    
    var request = new XMLhttpRequest();
    
    request.onreadystateChange = function() {
     if(request.readyState === XMLhttpRequest.DONE) {
      if(request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
      }
     }
    };
    
    request.open('GET','http://hridyadivakaran.imad.hasura-app.io/about us', true);
    request.send(null);
};
function createAccount () {
    var nameInput = document.getElementById('create-account');
    nameInput.value = "Surprise";
    $.ajax({
6:                   type: "POST",
7:                   url: "/server.js",
8:                   data: "doDBCall",
9:                   contentType: "application/json; charset=utf-8",
10:                   dataType: "json",
11:                   async: true,
12:                   cache: false,
13:                   success: function (msg) {
  14:                       nameInput.value = "waht";
  15:                   }
  16:               });
    document.location.href = '/ui/successMessage.html';
}

var Submit = document.getElementById('Submit_btn');
Submit.onclick = function() {
     var request = new XMLhttpRequest();
    
    request.onreadystateChange = function() {
     if(request.readyState === XMLhttpRequest.DONE) {
      if(request.status === 200){
          var name = request.responseText;
           name = JSON.parse(name);
           var list =" ";
           for (var i=0; i<name.length; i++){
        list += '<li>' + name[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
      }
     }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    
    request.open('GET','http://hridyadivakaran.imad.hasura-app.io/Submit-name?name=' + names, true);
    request.send(null);
    
    
};


