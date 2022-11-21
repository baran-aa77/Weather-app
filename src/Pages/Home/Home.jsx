import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ScaleLoader} from 'react-spinners';
import { getWeatherData } from '../../data/weatherapi';
import img from '../../img/1.png'
const Home=()=>{
    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('تهران');
    const [loading, setLoading] = useState(false);
    const getData = async () => {
      try{
          setLoading(true);
          const data = await getWeatherData(city);
          setWeatherData(data);
          setLoading(false);
      }catch(error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    console.log(weatherdata)
    useEffect(() => {
      getData();
    }, []);
    return(
        <div>
      
          <div className="card">
            <div style={{width:'50%',margin:'auto'}}> <img src={img} width={'100%'}/></div>
            <div className="search-form">
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="شهر را وارد کنید" />
              <button type="button" onClick={() => getData()}>جست و جو</button>
            </div>
            {loading ? (
              <div className="loader-container">
                <ScaleLoader
                  css={override}
                  size={200}
                  color= {"#fff"}
                  loading= {loading}
                  />
              </div>
            ) : (
              <>
              {weatherdata !== null ? (
              <div className="main-container">
                <div className="weather-icon">
                  <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}/>
    
                </div>
    
                <h3>{weatherdata.weather[0].main}</h3>
                <div className="temprature">
                  <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                </div>
                <div className="location">
                  <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
                </div>
                <div className="temprature-range">
                  <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
                  || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C 
                  || Humidity: {weatherdata.main.humidity}%</h6>
                </div>
              <Link to={`/weather/${city}`}> <button style={{backgroundColor:'purple',color:'white'}}>دما 5 روز آینده</button></Link>
            </div>
            ) : null}
              </>
            ) }       
          </div>
        </div>
      );
}
export default Home