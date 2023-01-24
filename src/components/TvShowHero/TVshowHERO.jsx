import React, { useContext } from 'react'
import { TVContext } from '../../context/TV.Context'
import TvShowInfo from './TVshowInfo'
const TvShowHerocomponent = () => {
    const {tvshow} = useContext(TVContext)
    const genres = tvshow.genres?.map(({name})=>name).join(', ')
    
  return (<>    
    <div>
      {/* {mobile and medium screen} */}
        <div className=' lg:hidden w-full '>
            <img 
            src= {`https://image.tmdb.org/t/p/original${tvshow.poster_path}`} 
            alt="moviecoverposter" 
            className='m-4 rounded'
            style={{width:"calc(100% - 2rem)"}}
            />
        </div>
        <div className='flex flex-col gap-3 lg:hidden'>
          <div className='flex flex-col-reverse gap-1 px-4 my-3'>
              <div className='text-black flex flex-col gap-2 md:px-4 font-bold'>
                  <h4>{tvshow.vote_count} Reviews</h4>
                  <h4>Kannada, English, Hindi, Telugu</h4>
                  <h4 className='font-bold '>{tvshow.first_air_date} {genres} </h4>
              </div>
          </div>
          <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
            <button className='bg-red-500 w-1/2 py-3 px-2 text-white font-semibold rounded-lg'>
              Rent 
            </button>
          </div>
        </div>

        {/* {Large Screen} */}
        
        <div className=" relative hidden w-full   lg:block" style={{height: "30rem"}}>
          <div className='absolute z-10 w-full h-full bg-gradient-to-r from-gray-900 via-gray-600 '/>
          <div className='absolute z-10 left-1/3 transform -translate-x-1/3 -translate-y-1/2 top-1/2 flex gap-10'>
          <div className='w-64 h-96'>
            <img             
            src= {`https://image.tmdb.org/t/p/original${tvshow.poster_path}`} 
            alt="Movie Poster" 
            className='w-full h-full rounded-lg'/>
          </div>
          <div>
            <TvShowInfo tvshow={tvshow}/>
          </div>
        </div>
        
        <img  
        src= {`https://image.tmdb.org/t/p/original${tvshow.poster_path}`}  
        alt="poster"
        className=' absolute right-0 w-1/2 h-full  object-cover object-top'   />
       
        </div>
    </div>
    </>

  )
}

export default TvShowHerocomponent