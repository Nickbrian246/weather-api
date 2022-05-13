import React from "react";
import { Button } from 'antd';

import { useDispatch } from "react-redux";
import { fetchWeatherByCoords } from "../../../store/thunks/fetchWeatherByCoords";
// import { setCurrentLocation } from "../../../store/slice/wheatherApiSlice";


const CurrrentLocationButton = () => {
  const dispatch = useDispatch();

const navigation = () => {
if (!"geolocation" in navigator){
  return alert("tu navegador no tiene geolocalizacion")
}

// const onUbicationConcedida= ubicacion => {
//   console.log( "ubicationsssss" , ubicacion);
//   // dispatch(setCurrentLocation(ubicacion));
// }
//   const error = err => {
//   console.log("errr  obtenitneo la " , err)
// }

// const opcinesDeSolicitud = {
// enableHighAccuracy: true,
//   maximumAge: 0,
//   timeout: 5000,
// }
  navigator.geolocation.getCurrentPosition(
    ({coords}) => {
    const userCoords = ([coords.latitude, coords.longitude])
      dispatch(fetchWeatherByCoords(userCoords));
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