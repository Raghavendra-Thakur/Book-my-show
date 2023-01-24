import React from 'react'
import Slider from 'react-slick'
import PosterComponent from '../Poster/TvPoster'
const PosterSlider = (props) => {
  const {posters,title,subtitle,isDark,config} = props
  const settings ={
    infinite : false,
    speed : 500,
    slidesToShow:5,
    slidesToScroll:5,
    nextArrow : <nextArrow/>,
    prevArrow : <prevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  }

  return (
    <>
      <div className='flex flex-col w-full items-start sm:ml-3 ml-0 my-2'>
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' :'text-black'}`}>
          {title}
        </h3>
        <p className={`text-2  ${isDark ? 'text-white' :'text-black'}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
      {posters.map((each,index)=>(
        <PosterComponent{...each} isDark ={isDark} key={index}/>
      ))}
      </Slider>
    </>
  )
}

export default PosterSlider