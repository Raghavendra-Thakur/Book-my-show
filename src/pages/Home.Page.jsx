import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DefaultlayoutHoc from '../layout/Default.layout'

//components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component'
import PosterSlider from '../components/PoseterSlider/PosterSlider.component'


const HomePage = () => {
  const[recomendedMovies , setrecomendedMovies] = useState([])
  const[premierMovie , setpremierMovie] = useState([])
  const[onlineStreamEvents , setonlineStreamEvents] = useState([])

  useEffect(()=>{
    const requestTopratedMovies = async ()=>{
    const requestgetTopratedMovies = await axios.get('/movie/top_rated')
    setrecomendedMovies(requestgetTopratedMovies.data.results);
  };
  requestTopratedMovies();
  },[]);

  
  useEffect(()=>{
    const requestToppremierMovie = async ()=>{
    const requestpremierMovie = await axios.get('/movie/now_playing')
    setpremierMovie(requestpremierMovie.data.results);
  };
  requestToppremierMovie();
  },[]);
  
  useEffect(()=>{
    const requestToponlineStreamEvents = async ()=>{
    const requestonlineStreamEvents = await axios.get('/movie/upcoming')
    setonlineStreamEvents(requestonlineStreamEvents.data.results);
  };
  requestToponlineStreamEvents();
  },[]);
  
  return (
   
    <>
    <HeroCarousel/>
    <div className = "container mx-auto px-4 md:px-12 my-8">
      <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best Of Entertainment</h1>
      <EntertainmentCard/>
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8 '>
      <PosterSlider
        title = "Recommended Movies"
        subtitle = "List of recomended movies"
        posters = {recomendedMovies}
        isDark= {false}
      />
    </div>

      <div className='bg-premier-800 py-12'>
        <div className=' container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3 '>
          <div className='hidden md:flex'>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RUpay img" />
          </div>
          </div>
          <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <PosterSlider title="Premiers" 
            subtitle ="Brand new realeases every friday"
            posters ={premierMovie}
            isDark={true}
          />
          </div>
       
      </div>

      <div className=' container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3 '>
      <PosterSlider title="Online Streaming Events" 
            subject ="OSE"
            posters ={onlineStreamEvents}
            isDark={false}
          />

      </div>
      </>
    
  )
}

export default DefaultlayoutHoc(HomePage)