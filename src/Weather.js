import React, { useEffect, useState } from "react";
import {round} from 'mathjs';
import Header from './Header';
import Reccomend from "./Recommend";

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
      // <>
      //   <label>
      //   <p>Please Enter your address in the following format.. (Zip Code is optional)<br></br> <em> CITY, STATE ZIP CODE</em></p>
      //     Address
      //      <input name="New Address" id ='userAddress' /> {/*onChange={userWeather} */}
      //   </label>
      //   <br />
      //   <button onClick={handleSubmit} id='addressButton'>Submit</button>
      //   <p><b>Temperature: {weather} (°F)</b></p>
      // </>
      <>
      <Header weather={weather} handleSubmit = {handleSubmit}/>
      <Reccomend weather={weather}/>
      </>
  
    );
  };

  export default WeatherForm;