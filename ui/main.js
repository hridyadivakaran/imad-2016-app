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
    var validation = doValidation();
    //document.location.href = '/ui/successMessage.html';
    if(validation === "") {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://hridyadivakaran.imad.hasura-app.io/register-me",
      "method": "POST",
      "body":{
          "name": "sreepad",
          "email" : "sree@s23",
          "username" : "sree123",
          "password" : "sree"
            },
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "1f9d7aa0-408b-7856-709b-ccb9a1f95e26"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
       document.location.href = '/ui/successMessage.html';
    }else {
        alert(validation);
    }
}
function doValidation() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var username = document.getElementById('username');
    var passsword = document.getElementById('passsword');
    var passwordagain = document.getElementById('passwordagain');
    if(name.value === '') {
        return "Please enter your name";
    }
    if(email.value === '') {
        return "Please enter email id";
    }
    if(username.value === '') {
        return "Please enter username";
    }
    if(passsword.value === '') {
        return "Please enter passsword";
    }
    if(passsword.value != passwordagain.value) {
        return "password and re-enter password doesn't match";
    }
     return "";
    
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


