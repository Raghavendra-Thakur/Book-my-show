import React from 'react'
import Navbar from "../components/Navbar/Navbar.Component"
import SecondNav from '../components/Navbar/SecondNav'
import Footer from '../components/Footer/Footer'
const DefaultlayoutHoc = 
  (Component)=>
  ({...props})=>{
     return (
      <div>
        <Navbar/>
      
        <SecondNav/>
        <Component {...props}/>
        <Footer/>
      </div>
      )
  }


export default DefaultlayoutHoc