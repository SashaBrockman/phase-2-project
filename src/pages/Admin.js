import React, { useContext, useState } from "react";
import { WeatherContext } from "../components/WeatherContext";
import "./Admin.css"

function Admin(){
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState(0);
    const [clouds, setClouds] = useState("clear");
    const [precip, setPrecip] = useState(false);
    const {weather, setWeather} = useContext(WeatherContext)

    function handleClouds(e){
        setClouds(e.target.value)
    };

    function handleTemp(e){
        setTemp(e.target.value)
    };

    function handleTime(e){
        setTime(e.target.value)
    };

    function hanldePrecip(){
        setPrecip((precip) => !precip)
    };

    function handleWeather(newForecast){
        const newWeather = [...weather, newForecast];
        setWeather(newWeather)

        setTime("")
        setClouds("clear")
        setPrecip(false)
        setTemp(0)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newForecast = {
            time: time,
            temp: temp,
            clouds: clouds,
            precip: precip
        };

        fetch("http://localhost:3000/weather",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForecast)
        })
        .then(r => r.json())
        .then(r => handleWeather(r))
    }

    return(
        <div className="admin-form">
            <h1 style={{textAlign: "center"}}>Add New Forecast</h1>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="time">Time {"(include a.m. or p.m.)"}: </label>
                    <div>
                        <input 
                            id="time"
                            type="text"
                            name="time"
                            value={time}
                            onChange={handleTime}
                        />
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="temp">Temperature {"(in degrees Fahrenheit)"}: </label>
                    <div>
                        <input
                            id="temp"
                            type="number"
                            name="temp"
                            min={-10}
                            max={150}
                            onChange={handleTemp}
                        />
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="clouds">Cloud cover: </label>
                    <div>
                        <select id="clouds" name="clouds" onChange={handleClouds}>
                            <option value="clear">Clear</option>
                            <option value="partial">Partially Cloudy</option>
                            <option value="cloudy">Cloudy</option>
                        </select>
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="precip">Rain chance: </label>
                    <div>
                        <input 
                            id="precip"
                            type="checkbox"
                            name="precip"
                            value={precip}
                            onChange={hanldePrecip}
                        />
                    </div>
                </div>
                <div className="button">
                    <button type="submit" >Add forecast</button>
                </div>
            </form>
        </div>
    );
}

export default Admin;