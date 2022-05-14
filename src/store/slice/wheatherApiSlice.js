import {createSlice} from '@reduxjs/toolkit'

import {fetchWeatherByCoords} from '../thunks/fetchWeatherByCoords'
import {fetchWeatherByName} from '../thunks/fetchWeatherByName';




const initialState = {
  weatherStatusFull : [],
  currentLocation : [],
  currentLocationByName: [],
};

export const allWeatherApis = createSlice ({
  name: 'weatherApi',
  initialState,
  reducers : {
    setWeatherStatus:(state, action) => {
      state.weatherStatusFull = action.payload
    },
    // setCurrentLocation: (state, action) => {
    //   state.currentLocation = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchWeatherByCoords.fulfilled, (state, action) => {
      state.currentLocation = action.payload
    })
    .addCase(fetchWeatherByName.fulfilled, (state, action) => {
      state.currentLocationByName = action.payload
    })
  }
});

export default allWeatherApis.reducer;

export const {setWeatherStatus,setCurrentLocation} = allWeatherApis.actions;
