const fs = require("fs");

const getEmployee = (id) => {
  const employeeData = fs.readFileSync("./model/employee.json");
  const employeeArr = JSON.parse(employeeData);

  // if id is passed as arg get single product
  if (id !== undefined) {
    const filteredemployeeArr = employeeArr.filter(
      (employee) => employee.id === id
    );
    return filteredemployeeArr;
  } else {
    return employeeArr;
  }
};

module.exports = getEmployee;
