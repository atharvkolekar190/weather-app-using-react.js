import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({})
  const apikey = "e0fbd80d2081abfb06df064875e03283"


  function getData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then((result) => {
        console.log(result.data);
        setWeather(result.data)
      })
  }


  return (
    <div className="App">
      <header style={{height:"60px",textAlign:"center",padding:"20px 0px",backgroundColor:"Grey"}} >
      <h2>Weather App by React</h2>
      </header>
      <div className='App-header'>
        <br /><br />
        <div className='col' style={{height:"500px"}}>
          <div className="card" style={{ backgroundColor: "Gray", color: "color" }}>
            <div className='card-body'>
              <input type="text" placeholder='Enter City Here!' onChange={(e) => setCity(e.target.value)} />
              <button onClick={getData} className='btn btn-primary' style={{ padding: "10px" }}>Search </button>
              <br />
              {
                !weather.main ?
                  <h3 style={{fontFamily:"cursive"}}>Find temperature and weather type here</h3>
                  :
                  <div className="div" style={{fontFamily:"cursive"}}>
                    <h1>{weather.name}</h1>
                    <br />
                    <h2>{weather.main.temp}&#176;C &nbsp;| &nbsp;{(weather.main.temp * 9 / 5) + 32}&#176;F </h2>
                    <br />
                    <h2>{weather.weather[0].main}</h2>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      <footer style={{height:"60px",textAlign:"center",padding:"20px 0px",backgroundColor:"Gray"}}><h4> Developed By Atharv Kolekar</h4></footer>
    </div>
  )
}
export default App;
