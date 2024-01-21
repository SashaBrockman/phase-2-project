import React from "react";

function HourForecast({ hour }){
    if(typeof hour === "undefined") return <h2>Loading</h2>

    return(
        <li class="hour">
            <h2>{hour.time}</h2>
            <p>{hour.temp}</p>
            <p>{hour.clouds}</p>
            <p>{hour.precip ? "Rain" : "No rain"}</p>
        </li>
    )
}

export default HourForecast;