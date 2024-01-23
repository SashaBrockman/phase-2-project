import React from "react";
import "./CurrentCard.css";

function CurrentCard({current}){
    if(typeof current === "undefined") return <h2>Loading</h2>

    return(
        <div className="current">
            <h1 style={{textAlign: "center"}}>Current Weather</h1>
            <h2 style={{textAlign: "center"}}>{current.time}</h2>
            <h3 style={{paddingTop: 5, paddingLeft: 10}}>Temperature: {current.temp} degrees</h3>
            <h3 style={{paddingTop: 5, paddingLeft: 10}}>Cloud cover: {current.clouds}</h3>
            <h3 style={{paddingTop: 5, paddingLeft: 10}}>{current.precip ? "Raining" : "No rain"}</h3>
        </div>
    );
}

export default CurrentCard;