import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import {useParams} from 'react-router-dom'
import MovielayoutHoc from '../layout/Movie.layout'
import { MovieContext } from '../context/Movie.Context';
import Slider from 'react-slick';
import {FaCcVisa , FaCcApplePay} from 'react-icons/fa'
import PosterSlider from '../components/PoseterSlider/PosterSlider.component';
import MovieHerocomponent from '../components/MovieHero/MovieHero.component';

const MoviePage = () => {
  const {id} = useParams();
  const {movie , setMovie} = useContext(MovieContext)
  const [cast ,setCast] = useState([]);
  const [similarMovie ,setSimilarMovie] = useState([]);
  const [recomendedMovies ,setrecomendedMovies] = useState([]);


  useEffect(()=>{
    const requestCast = async() =>{
      const getCast = await axios.get(`/movie/${id}/credits`)
      setCast(getCast.data.cast)
    }
    requestCast();
  },[id])

  useEffect(()=>{
    const requestSimilarMOvie = async() =>{
      const getSimilarMovie = await axios.get(`/movie/${id}/similar`)
      setSimilarMovie(getSimilarMovie.data.results)
    }
    requestSimilarMOvie();
  },[id])

  useEffect(()=>{
    const requestRecomendedMovies = async() =>{
      const getRecomendedMovies = await axios.get(`/movie/${id}/recommendations`)
      setrecomendedMovies(getRecomendedMovies.data.results)
    }
    requestRecomendedMovies();
  },[id])

  useEffect(()=>{
    const requestMovie = async ()=>{
      const getMovieData = await axios.get(`/movie/${id}`)
      setMovie(getMovieData.data)
    }
    requestMovie()
  },[id])
  const settingsCast={}
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
    <MovieHerocomponent/>
    <div className='container mx-auto'>
    <div className='my-12 container  px-4 lg:ml-20 lg:w-2/3'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-gray-800 font-bold text-2xl'>About the Movie</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
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
    <div className='my-8 container'>
      <PosterSlider config={settings} title="Recomended Movies" posters={similarMovie} isDark ={false}/>
    </div>
    <div className='my-8'>
      <hr />
    </div>
    <div className='my-8 container'>
      <PosterSlider config={settings} title="BMS XCLUSIVE" posters={recomendedMovies} isDark ={false}/>
    </div>
    </div>
    <div>Moviepage</div>
    </>
  
}

export default MovielayoutHoc(MoviePage)