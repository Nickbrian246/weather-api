import {createSlice} from '@reduxjs/toolkit'

import { fetchWeatherFromInformation } from '../../thunks/informationThunks/informationThunks';




const initialState = {
  currentLocationByNameByInformationPage: [],
};

export const informationApiCallMain = createSlice ({
  name: 'informationApiCallMain',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchWeatherFromInformation.fulfilled, (state, action) => {
      state.currentLocationByNameByInformationPage = action.payload
    })
  }
});

export default informationApiCallMain.reducer;
