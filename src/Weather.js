import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function getForecast(response) {
    console.log(response.data);
    setMessage(
      <ul>
        <h2 className="city">{city}</h2>
        <li>Temperature: {Math.round(response.data.main.temp)}ºC</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>
        
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
      
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4ef1e54a9a52c90543ac2a54b2d5a60b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getForecast);
  }

  function getTemperature(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather-app">
        <ReactAnimatedWeather 
        icon= 'CLEAR_DAY'
        color= 'goldenrod'
        animate= {true}
        />
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input className="search"
          type="search"
          placeholder="enter your city"
          onChange={getTemperature}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
      <br />
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <p>{message}</p>
    </div>
  );
}
