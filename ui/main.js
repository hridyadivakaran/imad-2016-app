//counter code

var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLhttpRequest();
    
    request.onreadystateChange = function() {
     if(request.readyState === XMLhttpRequest.DONE) {
      if(request.status === 200){
          var counter = request.responseText;
          var span = document.getElementById("count");
          span.innerHTML = counter.toString();
      }
     }
    };
    
    request.open('GET','http://hridyadivakaran.imad.hasura-app.io/counter', true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var Submit = document.getElementById('Submit_btn');
Submit.onclick = function() {
    
    var name = ['name1', 'name2', 'name3'];
    var list ='';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('nameslist');
    ul.innerHTML = list;
};