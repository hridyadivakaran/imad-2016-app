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