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
		" limit 12";
	connection.query(auctionsQuery, (error, results, fields)=>{
		if (error) throw error; 
		res.json(results);
		console.log(results);
	})
  // res.render('index', { title: 'Express' });
});



//make a register post route to handle registration!
router.post('/register', (req, res, next)=>{
	var checkDupeUserQuery = "SELECT * FROM users WHERE username= ?";
	connection.query(checkDupeUserQuery,[req.body.username], (error, results, fields)=>{
		console.log('$$$$$$$$$$$$$$$$');
		console.log(results);
		if(results.length == 0){
			//go ahead and register this person
			var insertUserQuery = "INSERT INTO users (username, password) VALUES " + 
				"(?, ?)";
				connection.query(insertUserQuery,[req.body.username, req.body.password], (error, results, fields)=>{
					res.json({msg:"userInserted"
				});
			});
		}else{
			res.json({
				msg: "username taken"
			})
		}
	})
	// res.json(req.body); 
})


module.exports = router;
