const { default: Choices } = require("inquirer/lib/objects/choices");

const initPrompt = [

{
    type: 'rawlist',
    name: 'selection',
    message: 'Please make a selection.',
    choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
},
{

}
];