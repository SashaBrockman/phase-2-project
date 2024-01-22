import React, { useContext, useState } from "react";
import { WeatherContext } from "../components/WeatherContext";

function Admin(){
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState(0);
    const [clouds, setClouds] = useState("clear");
    const [precip, setPrecip] = useState(false);
    const {setWeather} = useContext(WeatherContext)

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
        .then(r => console.log(r))

        setWeather((weather) => [...weather, newForecast])
        setTime("")
        setClouds("clear")
        setPrecip(false)
        setTemp(0)
    }

    return(
        <div>
            <h1>Admin</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="time">Time: </label>
                <div>
                    <input 
                        id="time"
                        type="text"
                        name="time"
                        value={time}
                        onChange={handleTime}
                    />
                </div>
                <label htmlFor="temp">Temperature: </label>
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
                <label htmlFor="clouds">Cloud cover: </label>
                <div>
                    <select id="clouds" name="clouds" onChange={handleClouds}>
                        <option value="clear">Clear</option>
                        <option value="partial">Partially Cloudy</option>
                        <option value="cloudy">Cloudy</option>
                    </select>
                </div>
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
                <button type="submit">Add forecast</button>
            </form>
        </div>
    );
}

export default Admin;