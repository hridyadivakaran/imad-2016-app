var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

/*var config = {
 host: 'db.imad.hasura-app.io',
 user: 'hridyadivakaran',
 password: process.env,DB_PASSWORD,
 database: 'hridyadivakaran',
 port: '5432'
};*/
var app = express();
app.use(morgan('combined'));

var article = { 
   'article-one' : {
    title: 'Article-one : HRIDYA DIVAKARAN' ,
    heading: 'Article one' ,
    date: 'November 3 2016' ,
    content: `<p>
                This is the content of the article. This is the content of the article. This is the content of the article.
                This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article.
            </p>
            <p>
                This is the content of the article. This is the content of the article. This is the content of the article.
                 This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article.
            </p>
            <p>
                This is the content of the article. This is the content of the article. This is the content of the article.
                This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article. This is the content of the article.
            </p> `
   } ,
   'article-two' : {
       title: 'Article-two : HRIDYA DIVAKARAN' ,
    heading: 'Article two' ,
    date: 'November 3 2016' ,
    content: `<p>
                This is the content of the  second article. 
            </p>`
            
   } ,
   'article-three' : {
       title: 'Article-three : HRIDYA DIVAKARAN' ,
    heading: 'Article three' ,
    date: 'November 3 2016' ,
    content: `<p>
                This is the content of the third article. 
            </p>`
            
   }
};
function createTemplate (data){
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 
  var htmlTemplate = `<html>
     <head>
        <title> 
           ${title}    
        </title>
        <meta name="viewport" content="width=device=width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
     </head>
     <body>
        <div class="container">
        <div>
         <a href="/">Home </a>
        </div>
        <hr/>
        <h3>
          ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
    </div>
  </body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


/*var pool = new Pool(config);
app.get('/test-db' , function (req, res){
     pool.query('SELECT * FROM test', function(err, result) {
       //handle an error from the query
      if(err) {
          res.status(500).send(err.toString());
      }else{
      res.send(JSON.stringify(result));
      }
    });
});*/

var counter = 0;
app.get('/counter', function(req, res){
   
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/Submit-name', function (req, res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(article[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
