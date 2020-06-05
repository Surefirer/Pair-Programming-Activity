const fs = require("fs");

const getEmployeeList = () => {
  const employeeData = fs.readFileSync("./model/employee.json");
  const employeeArr = JSON.parse(employeeData);

  return employeeArr;
};

module.exports = getEmployeeList;
