import React, { useState } from "react";

import { Input} from 'antd';
import { Alert } from 'antd';



import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import { fetchWeatherFromInformation } from "../../../../store/thunks/informationThunks/informationThunks";
import { fetchWeatherByName } from "../../../../store/thunks/mainThunks/fetchWeatherByName";

const { Search } = Input;

const SearchedInformation = () => {

const [alert, setAlert] = useState(false);

const dispatch = useDispatch();
// const error = useSelector((state)=> state.weatherApi.currentLocationByName?.error?.message);
// pendiente manejar el error desde el api

const onSearch = (value) => {
  if (value) {
    return (
      dispatch(fetchWeatherByName(value)),
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
  <Search placeholder="escribe el nombre de la ciudad o estado"
    enterButton
    size="medium" 
    allowClear
    style={{maxWidth:'500px'}}
    onSearch= {onSearch}
  />
  { alert === true && (<Alert
      message="Error"
      description=" Campo vacio"
      type="error"
      showIcon
      closable
      onClose={onClose}
    />) }

    </>   
  )
}

export {SearchedInformation};