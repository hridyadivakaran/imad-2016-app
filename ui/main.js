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
    if(validation === "") {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    alert("name "+name.value+"email "+email.value+"username "+username.value+"password "+password.value);
    //code to insert data into db.
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://hridyadivakaran.imad.hasura-app.io/register-me",
      "method": "POST",
      "data":{
          "name": document.getElementById('name').value,
          "email" : document.getElementById('email').value,
          "username" : document.getElementById('username').value,
          "password" : document.getElementById('password').value
      },
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "40592844-8f13-fb78-43c6-44feedb8e0ae"
      }
    };
    
    $.ajax(settings).done(function (response) {
      //document.location.href = '/ui/successMessage.html';
      alert("success");
    });
    
    //document.location.href = '/ui/successMessage.html';
    }else {
        alert(validation);
    }
}
function doValidation() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var username = document.getElementById('username');
    var passsword = document.getElementById('password');
    var passwordagain = document.getElementById('password-again');
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
    if(passwordagain.value === '') {
        return "Please enter passsword again";
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


