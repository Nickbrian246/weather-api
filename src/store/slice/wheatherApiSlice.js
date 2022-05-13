import {createSlice} from '@reduxjs/toolkit'

import {fetchWeatherByCoords} from '../thunks/fetchWeatherByCoords'




const initialState = {
  weatherStatusFull : [],
  currentLocation : [],
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
  }
});

export default allWeatherApis.reducer;

export const {setWeatherStatus,setCurrentLocation} = allWeatherApis.actions;
