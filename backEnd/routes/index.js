var express = require('express');
var router = express.Router();

//include config files that are in .gitignore
var config = require ('../config/config'); 
//include mysql
var mysql = require('mysql'); 

//set up connection to use over and over
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

//our connection will run
connection.connect();


/* GET top 10 auctions page. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = "Select * FROM auctions" +
		" INNER JOIN images ON images.auction_id = auctions.id " +
		" limit 10";
	connection.query(auctionsQuery, (error, results, fields)=>{
		if (error) throw error; 
		res.json(results);
	})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
