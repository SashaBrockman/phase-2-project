import logo from './logo.svg';
import './App.css';
import { WeatherProvider } from './components/WeatherContext';
import HourByHour from './pages/HourByHour';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <WeatherProvider>
        <HourByHour/>
      </WeatherProvider>
    </>
  );
}

export default App;
