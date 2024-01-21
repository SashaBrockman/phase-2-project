import { createContext, useEffect, useState } from 'react';

const WeatherContext = createContext();

function WeatherProvider({ children }){
    const [weather, setWeather] = useState([]);
    const forecast = {
        weather: weather,
        setWeather: setWeather
    };

    useEffect(() => {
        fetch("http://localhost:3000/weather")
        .then(r => r.json())
        .then(r => setWeather(r))
    },[]);

    return(
        <WeatherContext.Provider value={forecast}>{children}</WeatherContext.Provider>
    );
}

export {WeatherProvider, WeatherContext};