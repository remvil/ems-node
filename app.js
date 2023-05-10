const express = require("express");
const bodyParser = require("body-parser");
const {app, BrowserWindow} = require("electron");

// const employees = [
// 	{
// 		employeeId: "1",
// 		employeeName: "Aditya Gupta",
// 		employeePost: "Manager",
// 		employeeSalary: "43000",
// 	},
// 	{
// 		employeeId: "2",
// 		employeeName: "Vanshita Jaiswal",
// 		employeePost: "Assistant Manager",
// 		employeeSalary: "21000",
// 	},
// ];

// const expressApp = express();

// expressApp.set("view engine", "ejs");

// expressApp.use(bodyParser.json());
// expressApp.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// );

// expressApp.get("/", function (req, res) {
// 	res.render("home", {
// 		data: employees,
// 	});
// });

// expressApp.post("/", (req, res) => {
// 	const inputEmployeeId = employees.length + 1;
// 	const inputEmployeeName = req.body.employeeName;
// 	const inputEmployeePost = req.body.employeePost;
// 	const inputEmployeeSalary = req.body.employeeSalary;

// 	employees.push({
// 		employeeId: inputEmployeeId,
// 		employeeName: inputEmployeeName,
// 		employeePost: inputEmployeePost,
// 		employeeSalary: inputEmployeeSalary,
// 	});

// 	res.render("home", {
// 		data: employees,
// 	});
// });

// expressApp.post("/delete", (req, res) => {
// 	var requestedEmployeeId = req.body.employeeId;
// 	var j = 0;
// 	employees.forEach((employee) => {
// 		j = j + 1;
// 		if (employee.employeeId === requestedEmployeeId) {
// 			employees.splice(j - 1, 1);
// 		}
// 	});
// 	res.render("home", {
// 		data: employees,
// 	});
// });

// expressApp.post("/update", (req, res) => {
// 	const requestedEmployeeId = req.body.employeeId;
// 	const inputEmployeeName = req.body.employeeName;
// 	const inputEmployeePost = req.body.employeePost;
// 	const inputEmployeeSalary = req.body.employeeSalary;

// 	var j = 0;
// 	employees.forEach((employee) => {
// 		j = j + 1;
// 		if (employee.employeeId == requestedEmployeeId) {
// 			(employee.employeeName = inputEmployeeName), (employee.employeePost = inputEmployeePost), (employee.employeeSalary = inputEmployeeSalary);
// 		}
// 	});
// 	res.render("home", {
// 		data: employees,
// 	});
// });

// expressApp.listen(3000, (req, res) => {
// 	console.log("expressApp is running on port 3000");
// });

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadFile("index.html");
};

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});

app.whenReady().then(() => {
	createWindow();
});
