import React,{useState} from "react";
import axios from "axios";
import { FallingLines } from  'react-loader-spinner';
import "./Weather.css"


export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  
  function weatherData(event) {
    event.preventDefault();
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
  function showWeather(response) {
    if (city) {
      const temperature = response.data.main.temp;
      const humidity = response.data.main.humidity;
      const wind = response.data.wind.speed;
      const description = response.data.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
      setMessage({
        Temperature: temperature,
        Humidity: humidity,
        Wind: wind,
        Description: description,
        icon: icon
      });
    }
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={weatherData}>
      <input type="search" onChange={handleCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (city) {
    // alert(message);
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Temperature:{Math.round(message.Temperature)} C</li>
          <li>Description:{message.Description}</li>
          <li>Humidity:{message.Humidity}%</li>
          <li>Wind:{message.Wind}Km/h</li>
          <li>
            <img src={message.icon} alt={message.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="Weather">{form}
    <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel='falling-lines-loading'
        /></div>;
  }
}
