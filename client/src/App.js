import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
// import Weather from "./components/Weather";
// import axios from "axios";

const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  // function getSearchResult(cityName) {
  //   const weatherByCityApi = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f4720201c2278140c295b9bb0420dc51`;
  //   axios
  //     .get(`${weatherByCityApi}`)
  //     .then((response) => {
  //       Weather(response);
  //     })
  //     .catch((err) => {
  //       window.alert("Error");
  //     });
  // }

  getWeather = async (weather) => {
    weather.preventDefault();
    const city = weather.target.elements.city.value;
    const country = weather.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a City and Country.",
      });
    }
  };
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
                  {/* <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  /> */}
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
