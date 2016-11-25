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
    
    //code to insert data into db.
    var settings = 
    
    $.ajax({
      async: false,
      crossDomain: true,
      url: "http://hridyadivakaran.imad.hasura-app.io/register-me",
      method: "POST",
      data:{
          name: "sreepad"
            },
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        },
      success: function( data ){
        $('#response pre').html( JSON.stringify( data ) );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
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


