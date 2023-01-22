import React from 'react'
import {Link} from 'react-router-dom'
const PosterComponent = (props) => {
  return (<>    <Link to={`/movie/${props.id}`}>
    <div className='rounded flex flex-col item-center px-1 md:gap-2  md:px-3'>
      <div className='h-60  md:h-80 '>
        <img 
        src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} 
        alt="noposter"
        className='h-full w-full rounded-lg '
        />
      </div>

      <h3 className={`text-lg text-bold ${props.isDark ? 'text-white' : 'text-black'}`}>
        {props.original_title.length > 12 ? props.original_title.slice(0,12)+'...' :props.original_title }</h3>
    </div>
    </Link>
    
    </>

  )
}

export default PosterComponent