import React from "react";
import { Button } from 'antd';

import { useDispatch } from "react-redux";

import { fetchWeatherByName } from "../../../store/thunks/mainThunks/fetchWeatherByName";
// import { fetchWeatherByCoords } from "../../../store/thunks/mainThunks/fetchWeatherByCoords";
// import { setCurrentLocation } from "../../../store/slice/wheatherApiSlice";


const CurrrentLocationButton = () => {
  const dispatch = useDispatch();

const navigation = () => {
if (!"geolocation" in navigator){
  return alert("tu navegador no tiene geolocalizacion")
}

  navigator.geolocation.getCurrentPosition(
    ({coords}) => {
    const userCoords = ([coords.latitude, coords.longitude])
      // dispatch(fetchWeatherByCoords(userCoords));
      dispatch(fetchWeatherByName(userCoords));
      console.log(userCoords)
    },
    (err) => {
      alert('No se pudo obtener la geolocalizacion');
      console.log(err);
    }
    );


}

  return (
    <>
    <Button onClick={navigation} type="primary">Buscar Informacion del clima en mi Area</Button>
    </>
  )
}

export {CurrrentLocationButton};