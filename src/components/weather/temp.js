//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0a08481a03da497161baa8363ea4b26d

import React, { useState,useEffect } from 'react'
import './style.css'
import WeatherCard from './WeatherCard';
const Temp = () => {
  const[searchValue,setSearchValue] = useState("pune");
  const[tempInfo,setTempInfo] = useState({});
  const getWeatherInfo =async()=>{
    try{
let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0a08481a03da497161baa8363ea4b26d`;
const res= await fetch(url);
const data =await res.json();

const{temp,humidity,pressure} = data.main;
const{main:weathermood}= data.weather[0];
const{name}=data;
const{speed}=data.wind;
const{country,sunset} = data.sys;
const myNewWeatherInfo={
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset
};
setTempInfo(myNewWeatherInfo)
// console.log(temp);
// console.log(data);
}
    catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
getWeatherInfo()
   }, [])
  
  return (
    <>
    <div className='wrap'>
        <div className='search'>
    <input type ="search"
    placeholder='search...'
    autoFocus
    id="search"
    className="searchTerm"
    value={searchValue}
    onChange={(e)=> setSearchValue(e.target.value)}
    />
<button className='searchButton' type="button" onClick={getWeatherInfo}>
  search

</button>
        </div>
    </div>
    <div>
      
    </div>
    <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp