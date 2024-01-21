import { useContext, useEffect, useState } from 'react'

const WeatherContext = useContext();

function WeatherProvider(){
    const [weather, setWeather] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/weather")
        .then(r => r.json())
        .then(r => setWeather(r))
    })

    return(
        <WeatherContext.Provider value={weather}>{children}</WeatherContext.Provider>
    )
}

export {WeatherProvider, WeatherContext}