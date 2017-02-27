var path = require("path");

module.exports = function(app){
// Sends the survey html page when at / survey
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
// Defaults route to home
	app.use(function(req,res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};