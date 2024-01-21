import React, { useState } from "react";

function Admin(){
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState(0);
    const [clouds, setClouds] = useState("");
    const [precip, setPrecip] = useState(false);

    function handleClouds(){};

    function handleTemp(){};

    function handleTime(){};

    function hanldePrecip(){};

    return(
        <div>
            <h1>Admin</h1>
            <form>
                <label for="time">Time: </label>
                <div>
                    <input 
                        id="time"
                        type="text"
                        name="time"
                        value={time}
                        onChange={handleTime}
                    />
                </div>
                <label for="temp">Temperature: </label>
                <div>
                    <input
                        id="temp"
                        type="number"
                        name="temp"
                        value={temp}
                        onChange={handleTemp}
                    />
                </div>
                <label for="clouds">Cloud cover: </label>
                <div>
                    <select id="clouds" name="clouds" onChange={handleClouds}>
                        <option value="clear">Clear</option>
                        <option value="partial">Partially Cloudy</option>
                        <option value="cloudy">Cloudy</option>
                    </select>
                </div>
                <label for="precip">Rain chance: </label>
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