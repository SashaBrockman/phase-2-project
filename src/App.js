import { WeatherProvider } from './components/WeatherContext';
import HourByHour from './pages/HourByHour';
import CurrentWeather from './pages/CurrentWeather';
import Admin from './pages/Admin';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <WeatherProvider>
        <Outlet/>
      </WeatherProvider>
    </>
  );
}

export default App;
