const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home", {variableName: "Welcome home!"});
});

app.listen(3000, (req, res) => {
	console.log("App is running on port 3000");
});
