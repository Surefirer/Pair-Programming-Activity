const express = require("express");
const cors = require("cors");
const app = express();

const getEmployeeList = require("./controller/getEmployeeList");
const getEmployee = require("./controller/getEmployee");

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// api info endpoint for inventory item
app.get("/employee", (req, res) => {
  res.json(getEmployeeList());
});

// dynamic path using an id as a param
app.get("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
  res.json(getEmployee(employeeId));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
