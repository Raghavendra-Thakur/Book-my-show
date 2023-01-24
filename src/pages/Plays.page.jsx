import React from 'react'
import Playlayout from '../layout/Play.layout'
import TvPosterSlider from '../components/PoseterSlider/TvPosterSlider'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const PlayPage = () => {
  const [tvshow , setTvShow] = useState([])
  const [tvshowUpcoming , setTvShowUpcoming] = useState([])
  const [TvOnTheAir , setTvOnTheAir] = useState([])

  useEffect(()=>{
    const requestvshow = async () =>{
      const gettvshow = await axios.get('/tv/popular')
      setTvShow(gettvshow.data.results)
    }
    requestvshow()
  },[])

  useEffect(()=>{
    const requestvshowUpcoming = async () =>{
      const gettvshow = await axios.get('/tv/airing_today')
      setTvShowUpcoming(gettvshow.data.results)
    }
    requestvshowUpcoming()
  },[])

  useEffect(()=>{
    const requestTvOnTheAir = async ()=>{
      const getrequestTvOnTheAir = await axios.get('/tv/on_the_air')
      setTvOnTheAir(getrequestTvOnTheAir.data.results)
    }
    requestTvOnTheAir()
  })

 

  return (<>
    <div className='container mx-auto py-8 '>
    <TvPosterSlider
    title = "Popular Shows"
    subtitle = "List of recomended Shows"
    posters = {tvshow}
    isDark= {false}
    />
    </div>

    <div className='container mx-auto py-8 '>
    <TvPosterSlider
    title = "Upcoming Shows"
    subtitle = "List of recomended Shows"
    posters = {tvshowUpcoming}
    isDark= {false}
    />
    </div>

    <div className='container mx-auto py-8 '>
    <TvPosterSlider
    title = "On The Air Shows"
    subtitle = "List of recomended Shows"
    posters = {TvOnTheAir}
    isDark= {false}
    />
    </div>


  
    </>
  )
}

export default Playlayout(PlayPage)