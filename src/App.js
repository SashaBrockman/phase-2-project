import { WeatherProvider } from './components/WeatherContext';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <WeatherProvider>
        <Outlet/>
      </WeatherProvider>
    </>
  );
}

export default App;
