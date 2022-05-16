import React from "react";

import { SearchedInformation } from "./SearchedInformation";

import { Row, Col, Divider } from 'antd';

const Header = () => {


  return(
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    style={{
      background:'#0d152a',
      height:'50px',
    }}
    align= 'middle'
    justify="space-around">
      <Col span={14}>
      <SearchedInformation/>
      </Col>
    </Row>
    </>
  )
}
export {Header};