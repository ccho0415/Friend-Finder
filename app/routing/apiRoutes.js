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
			console.log(total);
			totaldif.push(total);
			diffs = [];
		});
		console.log(totaldif);
		res.json(true)

	});
};

		// 	console.log(diffs);
		// 	for(var i = 0; i <diffs.length; i++){
		// 		var add =  parseInt(diffs[i])+total;
		// 	}
		// 	totaldif.push(add);
		// 	var num = 0;
		// 	var total = 0;
		// 	var diffs= [];
		// });
		// console.log(totaldif);
		// res.json(true)