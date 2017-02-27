var friendData = require("../data/friend.js");
module.exports = function(app){
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	});
	app.post("/api/friends", function(req,res){
		friendArray.push({
			name: "'"+req.body.name+"'",
			photo: "'"+req.body.photo+"'",
			scores: [req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q7,req.body.q8,req.body.q9,req.body.q10]
		});
		res.json(true);
		console.log(req.body);
	});
};