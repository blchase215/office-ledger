const printLogo = () => console.log(`
  +----------------------------------------------------------+
  |   _____ ___ ___ _            __          _               |
  |  |     |  _|  _|_|___ ___   |  |   ___ _| |___ ___ ___   |
  |  |  |  |  _|  _| |  _| -_|  |  |__| -_| . | . | -_|  _|  |
  |  |_____|_| |_| |_|___|___|  |_____|___|___|_  |___|_|    |
  |                                           |___|          |
  +----------------------------------------------------------+
`);

const viewAllEmployees = function () {
  // view Employees table
}

const viewAllRoles = function () {
  // view Roles table
}

const viewAllDepartments = function () {
  // view Departments table
}

const addEmployee = function () {
  // add a new Employee, assignable to a Manager(role)
}

const addRole = function () {
  // add a new role, assignable to an Employee
}

const addDepartment = function () {
  // add a new Department, assignable to an Employee
}

const updateEmployee = function () {
  // updates an Employee Role
}


module.exports = { 
  printLogo,
  viewAllEmployees,
  viewAllRoles,
  viewAllDepartments,
  addEmployee,
  addRole,
  addDepartment,
  updateEmployee
};