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
		var diffs = [];
		var num = 0;
		var totaldif = [];
		var total = 0;
		var match;
		friendData.forEach(function(element){
			var user1 = element.scores;
			var user2 = req.body.scores;
			for (var i = 0; i < element.scores.length; i++){
				var num = parseInt(user1[i])-parseInt(user2[i]);
				diffs.push(Math.abs(num));
			}
			console.log(diffs);
			for(var i = 0; i <diffs.length; i++){
				total =  parseInt(diffs[i])+parseInt(total);
			}
			totaldif.push(total);
			diffs = [];
		});
		for (var i =0; i<totaldif.length; i++){
			if 	(totaldif[i] == Math.min(parseInt(totaldif))){
				match = friendData[i]
			}

		}
		console.log(match);
		res.json(true)

	});
};
