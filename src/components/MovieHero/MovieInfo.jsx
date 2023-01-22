import React, { useContext } from 'react'
import {RxStarFilled} from 'react-icons/rx'
import { useState } from 'react'
import { MovieContext } from '../../context/Movie.Context'

const MovieInfo = () => {
    const {movie} = useContext(MovieContext)
    const [isOpen , setIsOpen] = useState(false)
    const [price , setPrice] = useState(0)
    const genres = movie.genres?.map(({name})=>name).join(', ')
    const rentMovie = () =>{
        setIsOpen(true)
        setPrice(149)
    }
    const buyMOvie = () =>{
        setIsOpen(true)
        setPrice(599)
    }
  return (
    <>
    {/* <PaymentModel setIsOpen={setIsOpen} isOpen ={isOpen} price={price}/> */}
         <div className='flex flex-col gap-8'>
            <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
              <div className='text-white flex flex-col gap-4 '>
                <div className=' flex gap-3 items-end '>
                <RxStarFilled className=' text-red-600 text-3xl'/>
                  <h4 className='font-bold text-2xl  inline-flex gap-2 '> {movie.vote_average}/10 </h4>
                  <span className='text-sm'> {movie.vote_count} Votes </span>
                  </div>
                  <h4 className='bg-white text-black rounded px-2'>2D,3D,3D SCREEN X,4DX 3D,IMAX 3D</h4>
                  <h4 className='bg-white text-black rounded px-2'>Kannada, English, Hindi, Telugu</h4>
                  <h4 className='font-bold '>{movie.runtime} Min . {genres} . {movie.release_date} </h4>

              </div>
          
          <div className='flex items-center gap-3 w-full'>
            <button className='bg-red-500 w-full py-3 px-2 text-white font-semibold rounded-lg'>
              Rent 
            </button>
            <button className='bg-red-500 w-full py-3 px-2 text-white font-semibold rounded-lg'>
              Book Tickets 
            </button>
          </div>
        </div>
    </>
  )
}

export default MovieInfo