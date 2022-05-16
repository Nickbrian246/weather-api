import React from "react";
import { WeatherStatus } from "./components/WeatherStatus";

import { Image, Row, Col, Divider } from 'antd';

const BodyInformation = () => {


  return (
    <>
    <Row justify="bottom"
    align="center"
    style={{
      height:'500px',
      width:'100%',
      background:'#1e3459',
      }}>

      <Col>
      <WeatherStatus/>      
      </Col>
    </Row>
    </>
  )
}

export {BodyInformation}