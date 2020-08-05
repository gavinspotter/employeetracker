const inquierer = require("inquirer");
const db = require("./db");
require("console.table");

init();

const init = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "manage system",
      choices: [
        {
          name: "view employees",
          value: "viewEmployees",
        },
        {
          name: "view employees by department",
          value: "viewEmployeesByDepartment",
        },
        {
          name: "view employees by manager",
          value: "viewEmployeesByManager",
        },
        {
          name: "add employee",
          value: "addEmployee",
        },
        {
          name: "remove employee",
          value: "removeEmployee",
        },
        {
          name: "update employee role",
          value: "updateEmployeeRole",
        },
        {
          name: "update employee manager",
          value: "updateEmployeeManager",
        },
        {
          name: "view roles",
          value: "viewRoles",
        },
        {
          name: "add role",
          value: "addRole",
        },
        {
          name: "remove role",
          value: "removeRole",
        },
        {
          name: "view departments",
          value: "viewDepartments",
        },
        {
          name: "add department",
          value: "addDepartment",
        },
        {
          name: "remove department",
          value: "removeDepartment",
        },
        {
          name: "exit",
          value: "exit",
        },
      ],
    },
  ]);
};
