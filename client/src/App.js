import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Employee from "./components/Employee";
// import Weather from "./components/Weather";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

class App extends React.Component {
  state = {
    description: undefined,
    error: undefined,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/employee").then((response) => {
      console.log(response);
      this.setState({
        employeeList: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container">
                  <Form getWeather={this.getWeather} />
                  <Router>
                    <Switch>
                      <Route path="/employee/:id" component={Employee} />
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
