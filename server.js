var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
 host: 'db.imad.hasura-app.io',
 user: 'hridyadivakaran',
 password: process.env.DB_PASSWORD,
 database: 'hridyadivakaran',
 port: '5432'
};
var app = express();
app.use(morgan('combined'));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
           ${date.toDateString()}
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


var pool = new Pool(config);
app.get('/test-db' , function (req, res){
     pool.query('SELECT * FROM test', function(err, result) {
       //handle an error from the query
      if(err) {
          res.status(500).send(err.toString());
      }else{
      res.send(JSON.stringify(result.rows));
      }
    });
});

//code to make insert db call
//register-me is post route called from main.js file
function doDBCall (req,res) {
    console.log("****dd*****");
    console.log(req.body);
    var pool = new Pool(config);
    var count = 0;
    pool.query('SELECT COUNT (*) FROM  register;', function(err,result) {
        if(err) return onError(err);
        else count = result.rows[0].count;
      });
     count++;
    // var query = 'INSERT INTO register VALUES ('+count+','+
    pool.query('INSERT INTO register VALUES (count+","'+req.body.name+'","'+req.body.email+'","'+req.body.username+'","'+req.body.password+'")', function(err) {
        if(err) return onError(err);
        else console.log('success');
      });
   
   var onError = function(err) {
        console.log(err.message, err.stack);
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('An error occurred');
   };  
}
app.post('/register-me',function (req,res) {
    console.log("***dsdfsfsdfsdfsfs****");
    console.log(req.body);
    doDBCall(req,res);
    
});


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

var link =
app.get('/about us', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js')); 
});

app.get('/article/:articleName', function (req, res){
    //var articleName = req.params.articleName;
     pool.query("SELECT * FROM article WHERE title = '"  + req.params.articleName + "'", function(err, result) {
       
      if(err) {
          res.status(500).send(err.toString());
      }else{
          if(result.rows.length === 0){
              res.status(404).send('Article not found');
          }else{
             var articleData = result.rows[0];
             res.send(createTemplate(articleData));
          }
      }
    });
    });

/*
New code-Sree
to register the new files that have been created
*/
app.get('/ui/register.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'register.html'));
});

app.get('/ui/aboutUS.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutUS.html'));
});

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/successMessage.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'successMessage.html'));
});
//change finishes here

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
