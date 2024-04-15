import "./App.css";
import searchicon from './assets/search.svg'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import cloudy from './assets/cloudy.png'
// import drizzle from './assets/drizzle.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import humidityIcon from './assets/water-drop.png'
import windIcon from './assets/wind 2.png'
import { useState, useEffect } from "react";
import propTypes from "prop-types"

function WeatherDetails({ icon, temp, city, country, log, lat, humidity, wind, windSpeed, humidityPercentage }) {
  return (
    <>
      <div className="icon-cont">
        <img src={icon} className="image" alt="icon" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="card">
        <div>
          <span className="log">longitude</span>
          <span>{log}</span>
        </div>
        <div>
          <span className="lat">latitude</span>
          <span>{lat}</span>
        </div>
      </div>
      <div className="image-container">
        <div className="element">
          <div className="img-div">
            <img src={humidity} alt="" width={80} />
          </div>
          <div className="wind-per">{humidityPercentage}</div>
          <div className="wind-text">humidity</div>
        </div>
        <div className="element">
          <img src={wind} alt="" width={80} />
          <div className="data">
            <div className="wind-per">{windSpeed}km/h</div>
            <div className="wind-text">wind speed</div>
          </div>
        </div>
      </div>
    </>
  )
}

WeatherDetails.propTypes={
  icon:propTypes.string.isrequired,
  temp:propTypes.number.isrequired,
  city:propTypes.string.isrequired,
  country:propTypes.string.isrequired,
  log:propTypes.number.isrequired,
  lat:propTypes.number.isrequired,
  icwindSpeedon:propTypes.number.isrequired,
  humidityPercentage:propTypes.number.isrequired,
  windSpeed:propTypes.number.isrequired,

}
function App() {
  const [icon, setIcon] = useState(clear);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("IN");
  const [log, setLog] = useState(0);
  const [lat, setLat] = useState(0);
  const [humidity, setHumidity] = useState(humidityIcon);
  const [wind, setWind] = useState(windIcon);
  const [humidityPercentage, setHumidityPercentage] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [text, setText] = useState("chennai");
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const weatherIconMap = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloudy,
    "03n": clear,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": cloudy,
    "10n": snow,
    "13d": snow,
    "13n": snow,
  };

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const key = "998cd2824bb652aaac3795d514a3a4d1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}&units=Metric`;

    try {
      const data = await fetch(url);
      const res = await data.json();

      if (res.cod === "404") {
        console.error("City not found");
        setNotFound(true);
        setError(null);
      } else {
        setHumidityPercentage(res.main.humidity);
        setWindSpeed(res.wind.speed);
        setTemp(Math.floor(res.main.temp));
        setCountry(res.sys.country);
        setCity(res.name);
        setLog(res.coord.lon);
        setLat(res.coord.lat);

        const weatherIconCode = res.weather[0].icon;
        setIcon(weatherIconMap[weatherIconCode] || clear);
        setNotFound(false);
        setError(null); // Reset the error state
      }
    } catch (error) {
      console.error("Error occurred!", error.message);
      setError("An error occurred while fetching data.");
      setNotFound(true);
    }
  };

  const searchCity = (e) => {
    setText(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            name=""
            id="search-city"
            placeholder="Search city"
            onChange={searchCity}
            value={text}
            onKeyDown={handleKeydown}
          />
          <div className="search-cont" onClick={() => { search() }}>
            <img src={searchicon} alt="" />
          </div>
        </div>
        {error && <div className="error-msg">{error}</div>}
        {notFound && <div className="not-found">City not found!!!</div>}
        {!notFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            log={log}
            lat={lat}
            humidity={humidity}
            wind={wind}
            humidityPercentage={humidityPercentage}
            windSpeed={windSpeed}
          />
        )}
      </div>
    </>
  );
}



export default App;
