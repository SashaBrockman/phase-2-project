import CurrentWeather from "./pages/CurrentWeather";
import HourByHour from "./pages/HourByHour";
import Admin from "./pages/Admin"
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
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
        ]
    }
];

export default routes;