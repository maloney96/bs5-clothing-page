import React from "react";
// import fetch from 'node-fetch';

let initialFormData = Object.freeze({
    address : ""
  });

const WeatherForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(formData['New Address']);
      // Submit to partner's microservice 
      let address = encodeURIComponent(formData['New Address']);
      let response = await fetch(`http://localhost:3000/?addressString=${address}`);
      let data = await response.json();
    //   let todays_weather = list.0
    // Need to get just tomorrow's weather (0 index?)
      console.log(data)
    };
  
    return (
      <>
        <label>
          Address
          <input name="New Address" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
  };

  export default WeatherForm;