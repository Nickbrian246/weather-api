import React, { useState } from "react";
import { Input } from 'antd';

const { Search } = Input


const Searched = () => {
const [stateSearched, setStateSearched] = useState('');
// console.log(window.innerWidth)


  return (
    <>
    {/* <Search
    placeholder="escribe el estado y la ciudad que deseas buscar"
    loading enterButton
    /> */}
  
  <Search placeholder="input search text"
    enterButton
    size="medium" 
    style={{maxWidth:'500px'}}/>

    </>   
  )
}

export {Searched}
// onSearch={onSearch} 