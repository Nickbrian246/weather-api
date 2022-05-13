import React from "react";
import  {Searched} from './components/Search';
import { CurrrentLocationButton } from "./components/CurrrentLocationButton";

const Main = () => {



  return(
    <>
    <div style={{
      width:'100vw',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      background:'#0d152a',
      flexDirection:'column',
      gap:'30px'
    }}>
    <Searched/>
    <CurrrentLocationButton/>
    
  </div>
    
    </>
  )
}

export  {Main}