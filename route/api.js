var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('newdb', ['employees']);
//var Employee = require('../database/datafile');

router.get('/', function (req, res) {
	console.log("i received a get request");

	db.employees.find(function(err, docs){
		console.log(docs);
		//res.send('this is api data');
		res.json(docs);           //accept js object and returs json format
	});
	
router.post('/',function(req, res){
	console.log(req.body);
	db.employees.insert(req.body,function(err,doc){
		res.json(doc);
	 })
   });
});

module.exports = router;     //to make router visible to rest of the program when used in require