const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const employeePool = [];
// const Nicolette = new Intern("Nicolette", "123", "nrb1628@gmail.com", "888");
// console.log(Nicolette);
const generateHTML = require("./src/createHTML");
const fs = require("fs");
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EmployeeName",
        message: "Enter Manager name",
      },
      {
        type: "input",
        name: "EmployeeId",
        message: "Enter Manager ID",
      },
      {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter Manager email",
      },
      {
        type: "input",
        name: "EmployeeOfficeNumber",
        message: "Enter Manager Office Number",
      },
    ])
    .then((response) => {
      let manager = new Manager(
        response.EmployeeName,
        response.EmployeeId,
        response.EmployeeEmail,
        response.EmployeeOfficeNumber
      );
      employeePool.push(manager);
      employeeAdd();
      console.log(employeePool);
    });
}
promptManager();

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EmployeeName",
        message: "Enter Intern name",
      },
      {
        type: "input",
        name: "EmployeeId",
        message: "Enter Intern ID",
      },
      {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter Intern email",
      },
      {
        type: "input",
        name: "EmployeeSchool",
        message: "Enter Intern School",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.EmployeeName,
        response.EmployeeId,
        response.EmployeeEmail,
        response.EmployeeSchool
      );
      employeePool.push(intern);
      console.log(employeePool);
      employeeAdd();
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EmployeeName",
        message: "Enter Engineer name",
      },
      {
        type: "input",
        name: "EmployeeId",
        message: "Enter Engineer ID",
      },
      {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter Engineer email",
      },
      {
        type: "input",
        name: "EmployeeGithub",
        message: "Enter Employee Github",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.EmployeeName,
        response.EmployeeId,
        response.EmployeeEmail,
        response.EmployeeGithub
      );
      employeePool.push(engineer);
      console.log(employeePool);
      employeeAdd();
    });
}

function employeeAdd() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "What team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((response) => {
      if (response.member === "Manager") {
        promptManager();
      } else if (response.member === "Engineer") {
        promptEngineer();
      } else if (response.member === "Intern") {
        promptIntern();
      } else if (response.member === "None") {
        console.log("This pool is full");
        fs.writeFileSync("./dist/index.html", generateHTML(employeePool));
      }
    });
}
