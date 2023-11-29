import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key : '20844d47b186b85342dfe99a8054f081',
  base : "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [search, setSearch] = useState("");
  const [weather,setWeather] = useState({});
  const searchPressed = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) =>res.json())
    .then((result) => {
      setWeather(result);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*header */}
        <h1>Weather App</h1>
        {/*search box  - Input + button*/}
        <div>
        <input  type="text" placeholder='Enter city/town'
        onChange ={(e) => setSearch(e.target.value)} />
        <button onClick={() => searchPressed()}>search</button>
        </div>

        {/* If weather is not underfined */}
        {typeof weather.main != "undefined" ? (
        <div>
  
        {/*location */}
        <p>{weather.name}</p>

        {/*Temperature */}
        <p>{weather.main.temp}°C</p>

        {/*condition */}
        <p>{weather.weather[0].main}</p>
        <p>({weather.weather[0].description})</p>

        </div>
        ) :( ""
        )}   
      </header>
    </div>
  );
}

export default App;
