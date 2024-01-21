import logo from './logo.svg';
import './App.css';
import { WeatherProvider } from './components/WeatherContext';
import HourByHour from './pages/HourByHour';
import CurrentWeather from './pages/CurrentWeather';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Admin></Admin>
      <WeatherProvider>
        <CurrentWeather/>
        <HourByHour/>
      </WeatherProvider>
    </>
  );
}

export default App;
