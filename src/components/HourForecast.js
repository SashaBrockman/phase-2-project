import React from "react";

function HourForecast({ hour }){
    if(typeof hour === "undefined") return <h2>Loading</h2>

    return(
        <li class="hour">
            <h2>{hour.time}</h2>
            <p>Temperature: {hour.temp} degrees</p>
            <p>Cloud cover: {hour.clouds}</p>
            <p>{hour.precip ? "Chance of rain" : "Rain unlikely"}</p>
        </li>
    )
}

export default HourForecast;