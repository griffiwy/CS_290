var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 42720);

app.all('/',function(req,res){
  var gParam = [];
  var pParam = [];
  var context = {};
  for(var i in req.query){
    gParam.push({'name':i, 'value':req.query[i]})
  }
  
  context.getDataList = gParam;
  
  for (var i in req.body){
    pParam.push({'name':i,'value':req.body[i]})
  }
  console.log(pParam);
  console.log(req.body);
  
  context.postDataList = pParam;
  res.render('both-data', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
