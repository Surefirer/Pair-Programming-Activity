import React from "react";

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input
      className="input__search"
      type="text"
      name="search"
      placeholder="Search"
    />
    <button>Find Employee</button>
  </form>
);

export default Form;
