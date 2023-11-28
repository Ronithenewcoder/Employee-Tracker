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
    inquirer.prompt([
    ]).then((answers) => {
        const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
        const values = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

        db.query(query, values, (err, results) => {
            if (err) throw err;
            console.log("Employee added successfully!");
            startMenu();
        });
    });
};

// update an employees role
    const updateEmployeeRole = () => {
        inquirer.prompt([
            // Prompt user for employee ID and new role ID
            // Add inquirer prompts for employee ID and new role ID
        ]).then((answers) => {
            const query = "UPDATE employees SET role_id = ? WHERE employee_id = ?";
            const values = [answers.new_role_id, answers.employee_id];
    
            db.query(query, values, (err, results) => {
                if (err) throw err;
                console.log("Employee role updated successfully!");
                startMenu();
            });
        });
};

// Function to view all roles
const viewRoles = () => {
    const query = "SELECT * FROM roles";
    db.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        startMenu();
    });
};