import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Main}  from '../pages/main'

const RoutesApp = () => {


  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="" element={<></>}/>
          <Route path="/*" element={<></>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export {RoutesApp};