var express = require('express');
var router = express.Router();

//include config files that are in .gitignore
var config = require ('../config/config'); 
//include mysql
var mysql = require('mysql'); 

//set up connectino to use over and over
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

//our connection will run
connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
