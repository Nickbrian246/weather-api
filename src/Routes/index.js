import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Main}  from '../pages/main';
import { InformationIndex } from "../pages/information";

const RoutesApp = () => {


  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/" element={< InformationIndex/>}/>
          <Route path="/*" element={<></>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export {RoutesApp};