import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherByCoords =createAsyncThunk (
  'weatherApi/fetchWeatherByCoords',
  async (coords) => {
    
    try {
      const data =  await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${coords}`)
      const response = await data.json();
      return response
      
    } catch (err) {
      alert('erro al llamar a  la api');
      console.log(err);
    }
  }
  )