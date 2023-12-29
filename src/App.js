import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  //weather
  const [place, setPlace] = useState("");
  const [temperatue, setTemperatue] = useState(0);
  const [feelslike, setFeelslike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [precip, setPrecip] = useState(0);
  const [uv, setUv] = useState(0);
  const [wind, setWind] = useState(0);
  const [gustmph, setGustmph] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [date, setDate] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [locationregion, setLocationregion] = useState("");
  //tomorrow
  const [tmcondition, setTmcondition] = useState("");
  const [tmhumidity, setTmHumidity] = useState(0);
  const [tmchncrain, setTmchncrain] = useState(0);
  const [tmmaxtemp, setTmmaxtemp] = useState(0);
  const [tmmintemp, setTmmintemp] = useState(0);
  const [tmuv, setTmuv] = useState(0);

  useEffect(() => {}, []);

  async function GetWeatherData() {
    const data = await axios.get(
      "https://weatherapi-com.p.rapidapi.com/forecast.json",
      {
        params: { q: place, days: "3" },
        headers: {
          "X-RapidAPI-Key":
            "fa3fb6e83bmshc5f47411cdd4e0ep17307djsn85786301bafe",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );

    console.log("data", data);
    setFeelslike(data.data.current.feelslike_f);
    setHumidity(data.data.current.humidity);
    setPrecip(data.data.current.precip_in);
    setUv(data.data.current.uv);
    setWind(data.data.current.wind_mph);
    setGustmph(data.data.current.gust_mph);
    setTemperatue(data.data.current.temp_f);
    setDate(data.data.forecast.forecastday[0].date);
    setCondition(data.data.current.condition.text);
    setLocation(data.data.location.name);
    setLocationregion(data.data.location.region);
    //tommorow
    setTmcondition(data.data.forecast.forecastday[1].day.condition.text);
    setTmHumidity(data.data.forecast.forecastday[1].day.avghumidity);
    setTmchncrain(data.data.forecast.forecastday[1].day.daily_chance_of_rain);
    setTmmaxtemp(data.data.forecast.forecastday[1].day.maxtemp_f);
    setTmmintemp(data.data.forecast.forecastday[1].day.mintemp_f);
    setTmuv(data.data.forecast.forecastday[1].day.uv);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="sidebar">
          <div className="inputdiv">
            <input
              placeholder="Enter location"
              className="input"
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button className="button" onClick={GetWeatherData}>
              Enter
            </button>
          </div>
          <div className="weatherdetaildiv">
            <p className="weatherdetail">Weather Details</p>
          </div>
          <div>
            <p className="additionalinfo1">Weather Condition: {condition} </p>
            <br />
            <p className="additionalinfo1">Feels like: {feelslike}º </p>
            <br />
            <p className="additionalinfo1">Humidity: {humidity}</p>
            <br />
            <p className="additionalinfo1">Precipitation: {precip} in.</p>
            <br />
            <p className="additionalinfo1">UV Index: {uv} </p>
            <br />
            <p className="additionalinfo1">Wind: {wind} mph</p>
            <br />
            <p className="additionalinfo1">Gust: {gustmph} mph</p>
          </div>
          <div className="weatherdetaildiv">
            <p className="weatherdetail">Tomorrows Details</p>
          </div>
          <div>
            <p className="additionalinfo1">Weather Condition: {tmcondition} </p>
            <br />
            <p className="additionalinfo1">Average Humidity: {tmhumidity} </p>
            <br />
            <p className="additionalinfo1">Chance of Rain: {tmchncrain}%</p>
            <br />
            <p className="additionalinfo1">Max Temperature: {tmmaxtemp}º</p>
            <br />
            <p className="additionalinfo1">Min Temperature: {tmmintemp}º </p>
            <br />
            <p className="additionalinfo1">UV Index: {tmuv}</p>
            <br />
          </div>
        </div>
        <div className="headerbackg">
          <h2 className="headername">
            Leeon Israel <br />
            the.weather
          </h2>
        </div>

        <div className="tempdiv">
          <p className="temp">{temperatue}º</p>
          <p className="place">
            {" "}
            {location}, {locationregion} <br /> {date}{" "}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
