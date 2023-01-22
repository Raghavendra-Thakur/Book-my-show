import React from 'react'
import Navbar from "../components/Navbar/Navbar.Component"


const DefaultlayoutHoc = 
  (Component)=>
  ({...props})=>{
     return (
      <div>
        <Navbar/>
        <Component {...props}/>
        <div>footer</div>
      </div>
      )
  }


export default DefaultlayoutHoc