import React, { useEffect, useState } from "react";
import {round} from 'mathjs';
import Header from './Header';
import Recomend from "./Recommend";
import ClothOptions from './ClothOptions';

const WeatherForm = () => {
    const [weather, setWeather] = useState('None.. please enter');
  
    useEffect(() => {
      console.log('Tomorrow the weather is: ', weather);
    }, [weather]);
 
    const handleSubmit = async (e) => {
      let userAddress = document.getElementById('userAddress')
      console.log(userAddress.value)
      let address = encodeURIComponent(userAddress.value);
      let response = await fetch(`http://localhost:3001/?addressString=${address}`);
      let data = await response.json();
      console.log(data)
    // Need to get just tomorrow's weather (0 index)
      let kelv_temp = data.list[0].main.temp
      let far_temp = round(1.8*(kelv_temp-273) + 32)
      setWeather(far_temp);
    };
  
    return (

      <>
      <Header weather={weather} handleSubmit = {handleSubmit}/>
      <main>
      <ClothOptions></ClothOptions>
      </main>
      <Recomend weather={weather}/>
      </>
    );
  };

  export default WeatherForm;