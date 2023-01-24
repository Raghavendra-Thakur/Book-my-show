import React, { useContext } from 'react'
import {RxStarFilled} from 'react-icons/rx'
import { useState } from 'react'
import { TVContext } from '../../context/TV.Context'

const TvShowInfo = () => {
    const {tvshow} = useContext(TVContext)
    const [isOpen , setIsOpen] = useState(false)
    const [price , setPrice] = useState(0)
    const genres = tvshow.genres?.map(({name})=>name).join(', ')
    const renttvshow = () =>{
        setIsOpen(true)
        setPrice(149)
    }
    const buytvshow = () =>{
        setIsOpen(true)
        setPrice(599)
    }
  return (
    <>
    {/* <PaymentModel setIsOpen={setIsOpen} isOpen ={isOpen} price={price}/> */}
         <div className='flex flex-col gap-8'>
            <h1 className="text-white text-5xl font-bold">{tvshow.name}</h1>
              <div className='text-white flex flex-col gap-4 '>
                <div className=' flex gap-3 items-end '>
                <RxStarFilled className=' text-red-600 text-3xl'/>
                  <h4 className='font-bold text-2xl  inline-flex gap-2 '> {tvshow.vote_average}/10 </h4>
                  <span className='text-sm'> {tvshow.vote_count} Votes </span>
                  </div>
          
                  <h4 className='bg-white text-black rounded px-2'>Kannada, English, Hindi, Telugu</h4>
                  <h4 className='font-bold '> {genres} . {tvshow.first_air_date} </h4>

              </div>
          
          <div className='flex items-center gap-3 w-full'>
            <button className='bg-red-500 w-full py-3 px-2 text-white font-semibold rounded-lg'>
              Rent 
            </button>
           
          </div>
        </div>
    </>
  )
}

export default TvShowInfo