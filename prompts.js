
const initPrompt = {
    type: 'rawlist',
    name: 'selection',
    message: 'Please make a selection.',
    choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role'
    ]
};

const newEmployeePrompt = [
    {
        type: 'input',
        name: 'newEmpFirstName',
        message: 'Enter the new Employee\'s First Name:',
    },
    {
        type: 'input',
        name: 'newEmpLastName',
        message: 'Enter the new Employee\'s First Name:',
    },
    {
        type: 'rawlist',
        name: 'newEmpRole',
        message: 'Choose the new Employee\'s Role:',
        choices: [
            'Store Manager',
            'Operations Manager',
            'Asst. Store Manager',
            'Operations Specialist',
            'Accessories Manager',
            'Pro Audio Manager',
            'Guitar Manager',
            'Drum Manager',
            'Accessories Sales',
            'Pro Audio Sales',
            'Guitar Sales',
            'Drum Sales',
            'Door'
        ]
    }
];

const newRolePrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'Enter the Name of the new Role.'
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter the Salary for the new Role.'
    },
    {
        type: 'rawlist',
        name: 'roleDept',
        message: 'Choose the Dept the new Role belongs to.',
        choices: [
            'Executive',
            'Operations',
            'Accessories',
            'Pro Audio',
            'Guitars',
            'Drums'
        ]
    }
]

const newDeptPrompt = 
{
    type: 'input',
    name: 'newDept',
    message: 'Enter the New Department\'s name.'
};

module.exports = { initPrompt, newEmployeePrompt, newRolePrompt, newDeptPrompt };