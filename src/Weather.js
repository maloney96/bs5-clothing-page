import React, { useEffect, useState } from "react";
import {round} from 'mathjs';
import Header from './Header';
import Recomend from "./Recommend";
import ClothOptions from './ClothOptions';
import { hats_json, shirts_json, pants_json, shoes_json } from './ItemsCollection';

const WeatherForm = () => {
    const [weather, setWeather] = useState('None.. please enter');
  
    useEffect(() => {
      console.log('Tomorrow the weather is: ', weather);
    }, [weather]);
 
    // This calls the microservice and returns the weather in fahrenheit 
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

    const [clothItem, setclothItem] = useState('Gucci Hat');
    const [clothImage, setclothImage] = useState(hats_json['1']['img_url'])
  
    const dropHandleOnChange = (e) => {
      setclothItem(e.target.value);
      setclothImage(hats_json[e.target.value]['img_url']);
    };

    const weathButtonHandleOnChange = () => {
      let weath_desc = null
      // warm, cold, or moderate
      if (weather <= 46) {
         weath_desc = 'cold';
      }
      else if (weather > 46 && weather <= 86){
        weath_desc = 'moderate';
      }
      else {
        weath_desc = 'warm';
      };

      // Instantiate object to hold weather based clothing item
      let cloth_result = null


      for (var key of Object.keys(hats_json)) {
        if (hats_json[key]['w_type'] === weath_desc){
            cloth_result = hats_json[key]
        }
      }
      console.log(cloth_result.name);
      setclothItem(cloth_result.name);
      setclothImage(cloth_result['img_url']);

    }
  
    return (

      <>
      <Header weather={weather} handleSubmit = {handleSubmit}/>
      <main>
      <ClothOptions clothItem={clothItem} clothImage={clothImage} dropHandleOnChange={dropHandleOnChange}/>
      </main>
      <Recomend weather={weather} weathButtonHandleOnChange={weathButtonHandleOnChange}/>
      </>
    );
  };

  export default WeatherForm;