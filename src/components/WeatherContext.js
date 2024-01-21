import { useContext, useEffect, useState } from 'react';

const WeatherContext = useContext();

function WeatherProvider(){
    const [weather, setWeather] = useState([]);
    const forecast = [weather, setWeather];

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