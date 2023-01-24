import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import {useParams} from 'react-router-dom'
import Playlayout from '../layout/Play.layout';
import { TVContext } from '../context/TV.Context';
import Slider from 'react-slick';
import {FaCcVisa , FaCcApplePay} from 'react-icons/fa'
// import TvPosterSlider from '../components/PoseterSlider/TvPosterSlider';
import TvShowHerocomponent from '../components/TvShowHero/TVshowHERO'


const PlayPage = () => {
  const {id} = useParams();
  const {tvshow ,setTVShow} = useContext(TVContext)
 
  useEffect(()=>{
    const requestTvShow = async ()=>{
      const getTvShowData = await axios.get(`/tv/${id}`)
      setTVShow(getTvShowData.data)
    }
    requestTvShow()
  },[id])
  const settingsCast={
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
   
        },
      },
    ],
  }
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };


  return <>
    <TvShowHerocomponent/>
    <div className='container mx-auto'>
    <div className='my-12 container  px-4 lg:ml-20 lg:w-2/3'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-gray-800 font-bold text-2xl'>About the Show</h1>
        <p>{tvshow.overview}</p>
      </div>
    </div>
   {/* offer */}
    <div className='my-8'>
      <hr />
    </div>
      <div className='my-8 container'>
      <h2 className='text-gray-800 font-bold text-2xl my-3'>Applicable Offers</h2>
      <div className='flex flex-col gap-3 lg:flex-row'>
        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
          <div className='w-8, h-8'>
            <FaCcVisa className='w-full h-full'></FaCcVisa>
          </div>
          <div className='flex flex-col item-start'>
              <h3 className='text-gray-700 text-xl font-bold'>Visa Ticket Offer</h3>
              <p className='text-gray-600'>Get Exlusive Discounts with Visa Cards*</p>
          </div>
        </div>
        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
          <div className='w-8, h-8'>
            <FaCcApplePay className='w-full h-full'></FaCcApplePay>
          </div>
          <div className='flex flex-col item-start'>
              <h3 className='text-gray-700 text-xl font-bold'>Film Pass Offer</h3>
              <p className='text-gray-600'>Get Film Pass and see ne movie every friday apple pay*</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className='my-8'>
      <hr />
    </div>
   
   
    </div>
   
    </>
  
}

export default Playlayout(PlayPage)
