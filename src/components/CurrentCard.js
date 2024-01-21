import React from "react";

function CurrentCard({current}){
    if(typeof current === "undefined") return <h2>Loading</h2>

    return(
        <div className="current">
            <h2>{current.time}</h2>
            <p>Temperature: {current.temp} degrees</p>
            <p>Cloud cover: {current.clouds}</p>
            <p>{current.precip ? "Raining" : "No rain"}</p>
        </div>
    );
}

export default CurrentCard;