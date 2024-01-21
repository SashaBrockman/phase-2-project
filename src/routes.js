import CurrentWeather from "./pages/CurrentWeather";
import HourByHour from "./pages/HourByHour";
import Admin from "./pages/Admin"

const routes = [
    {
        path: "/",
        element: <CurrentWeather/>
    },
    {
        path: "/hourly",
        element: <HourByHour/>
    },
    {
        path: "/admin",
        element: <Admin/>
    }
];

export default routes;