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

    // Grabbing just tomorrow's weather (0 index)
      let kelv_temp = data.list[0].main.temp
      let far_temp = round(1.8*(kelv_temp-273) + 32)
      setWeather(far_temp);
    };

    const [hatItem, sethatItem] = useState('Gucci Hat');
    const [hatImage, sethatImage] = useState(hats_json['1']['img_url'])

    const [shirtItem, setshirtItem] = useState('Patagonia T-Shirt');
    const [shirtImage, setshirtImage] = useState(shirts_json['3']['img_url'])

    const [pantsItem, setpantsItem] = useState('Lululemon Shorts');
    const [pantsImage, setpantsImage] = useState(pants_json['1']['img_url'])

    const [shoesItem, setshoesItem] = useState('Adidas Boost Slides');
    const [shoesImage, setshoesImage] = useState(shoes_json['3']['img_url'])
  

    const dropHandleOnChange = (e, item_type) => {
      console.log(item_type)
      if (item_type === 'hat'){
        sethatItem(e.target.value)
        sethatImage(hats_json[e.target.value]['img_url'])
      }
      else if (item_type === 'shirt'){
        setshirtItem(e.target.value)
        setshirtImage(shirts_json[e.target.value]['img_url'])
      }
      else if (item_type === 'pants'){
        setpantsItem(e.target.value)
        setpantsImage(pants_json[e.target.value]['img_url'])
      }
      else if (item_type === 'shoes'){
        setshoesItem(e.target.value)
        setshoesImage(shoes_json[e.target.value]['img_url'])
      }
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
      let hat_result = null;
      let shirt_result = null;
      let pants_result = null;
      let shoes_result = null;

      let all_clotht_json = [hats_json,shirts_json,pants_json,shoes_json];

      for (const clotht of all_clotht_json){
        for (var key of Object.keys(clotht)) {
          if (clotht[key]['w_type'] === weath_desc){
            let clotht_result = clotht[key]
            if (clotht === all_clotht_json[0]){
              hat_result = clotht_result;
            }
            else if (clotht === all_clotht_json[1]){
              shirt_result = clotht_result;
            }
            else if (clotht === all_clotht_json[2]){
              pants_result = clotht_result;
            }
            else if (clotht === all_clotht_json[3]){
              shoes_result = clotht_result;
            } 
          }
        }
      }
      console.log(hat_result.name);
      sethatItem(hat_result.name);
      sethatImage(hat_result['img_url']);

      console.log(shirt_result.name);
      setshirtItem(shirt_result.name);
      setshirtImage(shirt_result['img_url']);

      console.log(pants_result.name);
      setpantsItem(pants_result.name);
      setpantsImage(pants_result['img_url']);

      console.log(shoes_result.name);
      setshoesItem(shoes_result.name);
      setshoesImage(shoes_result['img_url']);

      }
  
    return (

      <>
      <Header weather={weather} handleSubmit = {handleSubmit}/>
      <main>
      <ClothOptions hatItem={hatItem} hatImage={hatImage} shirtItem={shirtItem} shirtImage={shirtImage} pantsItem={pantsItem} pantsImage={pantsImage} shoesItem={shoesItem} shoesImage={shoesImage} dropHandleOnChange={dropHandleOnChange}/>
      </main>
      <Recomend weather={weather} weathButtonHandleOnChange={weathButtonHandleOnChange}/>
      </>
    );
  };

  export default WeatherForm;