import React from "react";

function HourForecast({ hour }){
    return(
        <div class="hour">
            <h2>{hour.time}</h2>
            <p>{hour.temp}</p>
            <p>{hour.cloud-cover}</p>
            <p>{hour.precip ? "Rain" : "No rain"}</p>
        </div>
    )
}

export default HourForecast;