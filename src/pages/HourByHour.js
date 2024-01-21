import { useContext } from "react";
import { WeatherContext } from "../components/WeatherContext";
import HourForecast from "../components/HourForecast";


function HourByHour(){
    const {weather} = useContext(WeatherContext);

    const hourList = weather.map((hour) => {
        return <HourForecast hour={hour} key={hour.id}/>
    })

    return(
        <ul>
            {hourList}
        </ul>
    );
}

export default HourByHour;