import React from "react";

import { useSelector } from "react-redux";

import { Image, Row, Col, Divider } from 'antd';



const WeatherStatus = () => {

  const {
    feelslike_c,
    humidity,
    temp_c,
    uv,
    wind_kph

  } = useSelector((state) => state.weatherApi.currentLocationByName.current);
  const {
    icon,
    text} = useSelector((state) => state.weatherApi.currentLocationByName.current.condition);

  return (
    <>
    <Row  gutter={30}>
      {/* <Col>
      <Image
      width={80}
      src={icon}
    />
      </Col> */}
      <Col>
      <h1 style={{color:'white'}}>{`temperatura: ${temp_c}°c`}</h1>
      </Col>
      <Col>
      <h1 style={{color:'white'}}>{`humedad : ${humidity}%`}</h1>
      </Col>
      <Col>
      <h1 style={{color:'white'}}>{`Velocidad del viento : ${wind_kph}kph`}</h1>
      </Col>
      <Col>
      <h1 style={{color:'white'}}>{`rayos   UV : ${uv}`}</h1>
      </Col>
      <Col>
      <h1 style={{color:'white'}}>{`sensacion termica : ${feelslike_c}°c`}</h1>
      </Col>
    </Row>
    
    </>
  )
}

export {WeatherStatus}
// bg: color :#1e3459