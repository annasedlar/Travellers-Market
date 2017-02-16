var express = require('express');
var router = express.Router();

//include config files that are in .gitignore
var config = require ('../config/config'); 
//include mysql
var mysql = require('mysql'); 

var randToken = require('rand-token');

//set up connection to use over and over
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

//our connection will run
connection.connect();

//encryption 
//1. include module
var bcrypt = require('bcrypt-nodejs');

//2. run hashSync on given password
// var hashedPassword = bcrypt.hashSync('x'); 
// console.log(hashedPassword);
// //3. compare hashed password with saved hash
// var checkHash = bcrypt.compareSync("x", hashedPassword);
// console.log(checkHash);
// var checkHash2 = bcrypt.compareSync("bacon", hashedPassword);
// console.log(checkHash2);

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
				connection.query(insertUserQuery,[req.body.username, bcrypt.hashSync(req.body.password)], (error, results, fields)=>{
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



//2. run hashSync on given password
// var hashedPassword = bcrypt.hashSync('x'); 
// console.log(hashedPassword);
// //3. compare hashed password with saved hash
// var checkHash = bcrypt.compareSync("x", hashedPassword);
// console.log(checkHash);
// var checkHash2 = bcrypt.compareSync("bacon", hashedPassword);
// console.log(checkHash2);

router.post('/login', (req, res, next)=>{
	var username= req.body.username;
	var password = req.body.password;
	var findUserQuery = "SELECT password FROM users WHERE username = ?";
	connection.query(findUserQuery, [req.body.username], (error, results, fields)=>{
		if(error) throw error; 
		if(results.length === 0){
			res.json({
				msg: "bad username"
			});
		}else{
		// this is a valid username, we know because results.length >0;
		//results is AN ARRAY! Always grab 0th result
			checkHash = bcrypt.compareSync(password, results[0].password);
			console.log("$$$$$$$############################");
			console.log(checkHash);
			console.log("$$$$$$$############################");
			if(checkHash === false){
				res.json({
					msg: "bad password"
				})
			}else{
				//we have a match on username and the hashed password is good
				var token = randToken.generate(32);
				insertToken = "UPDATE users SET token=? token_exp=DATE_ADD(NOW(), INTERVAL1 HOUR WHERE username=?";
				connection.query(insertToken, [token, username], (error2, results2, fields2)=>{
					console.log(token); 
					res.json({
						msg: "found user",
						token: token,
						username: username 
					})
				})
			}
		}
	});
	// res.json(req.body); 
});


module.exports = router;











