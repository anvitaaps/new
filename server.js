//import the required modules to setup server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');       //to help deal with json requests


//index and api contain the path of routing files 
//var index = require('./route/index');
var api = require('./route/api');

//set the body-parser and url encoded middleware
app.use(bodyParser.json());                                //used to get data from request body : POST, PUT AND DELETE
app.use(bodyParser.urlencoded({extended:false}));          //used to get data from url requested
app.use(express.static(__dirname + '/public'));

//set the '/' and 'api' requests
//app.use('/', index);             //home page request handled by index.js
app.use('/api', api);            //api request handles by api.js
//app.use('*', index);             //default routing handled by index.js
 app.get('*', function(req, res){
    res.sendFile('index.html', {root : __dirname + '/public/views'});
});
//set the server 
app.listen(3004);
console.log("Server running on port 3000");