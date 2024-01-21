import React, { useContext } from "react";
import { WeatherContext } from "../components/WeatherContext";
import CurrentCard from "../components/CurrentCard";

function CurrentWeather(){
    const {weather} = useContext(WeatherContext);
    
    return(
        <CurrentCard current={weather[0]}/>
    );
}

export default CurrentWeather;