var friendData = require("../data/friend.js");
module.exports = function(app){
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	});
	app.post("/api/friends", function(req,res){
		console.log(req.body);
		// friendData.push({
		// 	name: req.body.name,
		// 	photo: req.body.photo,
		// 	scores: req.body.scores
		// });
		for (var i =1; i<friendData.length; i++){
			var user1 = friendData[i].scores;
			var user2 = req.body.scores;
			user1.forEach(element)
		}

		res.json(true)

	});
};