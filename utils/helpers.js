const printLogo = () => console.log(`
  +----------------------------------------------------------+
  |   _____ ___ ___ _            __          _               |
  |  |     |  _|  _|_|___ ___   |  |   ___ _| |___ ___ ___   |
  |  |  |  |  _|  _| |  _| -_|  |  |__| -_| . | . | -_|  _|  |
  |  |_____|_| |_| |_|___|___|  |_____|___|___|_  |___|_|    |
  |                                           |___|          |
  +----------------------------------------------------------+
`);

const addRole = function () {
  // add a new role, assignable to an Employee
}
const addDepartment = function () {
  // add a new Department, assignable to an Employee
}
const addEmployee = function () {
  // add a new Employee, assignable to a Manager(role)
}


module.exports = { printLogo, addRole, addDepartment, addEmployee };