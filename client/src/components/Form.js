import React, { Component } from "react";
import axios from "axios";

// function Form(props) {
export default class Form extends Component {
  state = {
    employee: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/employee").then((response) => {
      console.log(response);
      this.setState({
        employee: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <input type="text" name="city" placeholder="Name" />
          <button>Find Employee</button>
        </form>
        <div className="employeeList">
          <div className="employeeList-Wrapper">
            <h3 className="employeeList__nameTitle">Employee name</h3>
            <h3 className="inventory__positionTitle">Position</h3>
          </div>
        </div>

        {this.state.employee.map((employee) => (
          <div className="employee__contentWrapper" key={employee.id}>
            <div className="employee__name">{employee.name}</div>
            <div className="employee__position">{employee.position}</div>
          </div>
        ))}
      </>
    );
  }
}
