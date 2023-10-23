import React,{useState} from "react";
import axios from "axios";
import { FallingLines } from  'react-loader-spinner';

export default function Weather(props){
    let[weather,setWeather] = useState("");
     function showWeather(response){
       
       setWeather({temperature: response.data.main.temp,
    city:response.data.name})

        
    }
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cities}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
    if(props.cities){
    return(
        <h3>Todays Weather in {weather.city} is {Math.round(weather.temperature)} </h3>
    )
}
else{
    return(<FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>)

}
}