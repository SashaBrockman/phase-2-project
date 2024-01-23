import React from "react";
import "./HourForecast.css"

function HourForecast({ hour }){
    if(typeof hour === "undefined") return <h2>Loading</h2>

    return(
        <li className="hour">
            <h2 style={{gridColumn: 1}}>{hour.time}</h2>
            <p style={{gridColumn: 2, paddingTop: 10}}>Temperature: {hour.temp} degrees</p>
            <p style={{gridColumn: 3, paddingTop: 10}}>Cloud cover: {hour.clouds}</p>
            <p style={{gridColumn: 4, paddingTop: 10}}>{hour.precip ? "Chance of rain" : "Rain unlikely"}</p>
        </li>
    )
}

export default HourForecast;