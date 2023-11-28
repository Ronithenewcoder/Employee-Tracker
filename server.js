const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'employees_db',
},
    console.log('Conected to database!'));



db.connect(function (err) {
    if (err) throw err;
    startMenu();
});

const startMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select what you would like to do?",
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles','Quit'],
        }
    ]).then((res) => {

        switch (res.menu) {
            case 'View All Employees':
                viewEmployees()
                break;
            case 'Add Employee':
                addEmployee()

                break;
            case 'Update Employee Role':
                updateEmployeeRole()
                break;
            case 'View All Roles':
                viewRoles()
                break;
            case 'Quit':
                db.end();
                break;
        }
    });
};

// view all employees
    const viewEmployees = () => {
        const query = "SELECT * FROM employees";
        db.query(query, (err, results) => {
            if (err) throw err;
            console.table(results);
            startMenu();
        });
};

// add a new employee
const addEmployee = () => {
   
};

// update an employees role
const updateEmployeeRole = () => {
    
};

// Function to view all roles
const viewRoles = () => {
  
};