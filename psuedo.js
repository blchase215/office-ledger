// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

// ===========================================

//* TABLE SCHEMA

// ===========================================

// your schema should contain the following three tables:

// * `department`

//     * `id`: `INT PRIMARY KEY`

//     * `name`: `VARCHAR(30)` to hold department name

// * `role`

//     * `id`: `INT PRIMARY KEY`

//     * `title`: `VARCHAR(30)` to hold role title

//     * `salary`: `DECIMAL` to hold role salary

//     * `department_id`: `INT` to hold reference to department role belongs to

// * `employee`

//     * `id`: `INT PRIMARY KEY`

//     * `first_name`: `VARCHAR(30)` to hold employee first name

//     * `last_name`: `VARCHAR(30)` to hold employee last name

//     * `role_id`: `INT` to hold reference to employee role

//     * `manager_id`: `INT` to hold reference to another employee that 
//     *                is the manager of the current employee (`null` if the employee has no manager)

// ===========================================

// You might want to use a separate file that contains functions 
// for performing specific SQL queries you'll need to use. 
// A constructor function or class could be helpful for organizing these.
// You might also want to include a `seeds.sql` file to pre-populate 
// your database, making the development of individual features much easier.

// 
// dependencies
// mysql2, express, fs, inquirer, console.table

//* ON START
//  -prompt options:
//      -view all departments
//      -view all roles
//      -view all employees
//      -add a dept
//      -add a role
//      -add an employee
//      -update an employee

//  -view all departments   // 
//      -show table of dept names and dept ids

//  -view all roles         //
//      -show table of:
//          -job title
//          -role id
//          -dept associated role
//          -salary for role

//  -view all employees     //
//      -show table of:
//          -emp ids
//          -first names
//          -last names
//          -job titles
//          -departments
//          -salries
//          -manger

//  -add a department       // create
//      -prompt to enter name of dept
//      -dept is added to db

//  -add a role             // create
//      -prompt to enter:
//          -name
//          -salary
//          -dept for role
//      -role added to db

//  -add an employee        // create
//      -prompt to enter:
//          -first name
//          -last name
//          -role
//          -manager
//      -emp added to db

//  -update an employee role    // update
//      -prompt to select:
//          -employee to update
//          -new role
//      -info updated in db
// 
// ===========================================
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 