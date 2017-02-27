// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// Port
var port = 3000;
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Listener
app.listen(port, function(){
	console.log("Listening on Port :" +port);
});