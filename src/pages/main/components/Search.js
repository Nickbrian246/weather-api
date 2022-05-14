import React, { useState } from "react";

import { Input} from 'antd';
import { Alert } from 'antd';



import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchWeatherByName } from "../../../store/thunks/fetchWeatherByName";


const { Search } = Input;

const Searched = () => {

const [alert, setAlert] = useState(false);
const [alertByApi, setAlertByApi] = useState(false);

const dispatch = useDispatch();
// const error = useSelector((state)=> state.weatherApi.currentLocationByName?.error?.message);
// pendiente manejar el erro

const onSearch = (value) => {
  if (value) {
    return (
      dispatch (fetchWeatherByName(value)),
      setAlert(false)
    )
  } 
  setAlert(true);
};

const onClose = (value) => {
  setAlert(false)
};


  return (
    <>
    { alert === true && (<Alert
      message="Error"
      description=" Campo vacio"
      type="error"
      showIcon
      closable
      onClose={onClose}
    />) }
  <Search placeholder="escribe el nombre de la ciudad o estado"
    enterButton
    size="medium" 
    allowClear
    style={{maxWidth:'500px'}}
    onSearch= {onSearch}
  />

    </>   
  )
}

export {Searched};