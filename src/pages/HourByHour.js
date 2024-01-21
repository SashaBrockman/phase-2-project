import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../components/WeatherContext";


function HourByHour(){
    const [weather, setWeather] = useState([])

    useEffect(() => {
        newWeather = useContext(WeatherContext);
        setWeather(newWeather)
    })

    return();
}