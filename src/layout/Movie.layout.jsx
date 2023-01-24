import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'
import SecondNav from '../components/Navbar/SecondNav'
import Footer from '../components/Footer/Footer'
const MovielayoutHoc =  
  (Component)=>
  ({...props})=>{
    return (
      <div>
        <MovieNavbar/>
        <SecondNav/>
        <Component {...props}/>
        <Footer/>
      </div>
      )
  }
  


export default MovielayoutHoc