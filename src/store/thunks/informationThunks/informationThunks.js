import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherFromInformation =createAsyncThunk (
  'informationApiCallMain/fetchWeatherFromInformation',
  async (stateName) => {
    console.log(stateName)
    try {
      const data =  await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${stateName}`)
      const response = await data.json();
      return response;
      console.log(response)
      
    } catch (err) {
      alert('erro al llamar a  la api');
      console.log(err);
    }
  })
