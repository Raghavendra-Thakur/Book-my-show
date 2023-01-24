import React from 'react'
import { Link } from 'react-router-dom'
const SecondNav = () => {
  return (
    <>
    <div className=' bg-darkBackground-800 hidden md:block'>
        <div className='container pt-1 pb-1 flex justify-between  mx-auto  '>
        <div className=' flex gap-2 text-gray-300 font-semibold'>
            <Link className='hover:text-white' to={'/'}>Movies</Link>
            <Link className='hover:text-white' to={'/plays'}>Plays</Link>
            <Link className='hover:text-white' to={'/'}>Stream</Link>
            <Link className='hover:text-white' to={'/'}>Events</Link>
            <Link className='hover:text-white' to={'/'}>Sports</Link>  
        </div>
        <div className=' flex gap-2  text-gray-300 font-semibold '>
            <h3 className='hover:text-white'>ListYourShow</h3>
            <h3 className='hover:text-white'>Corporates</h3>
            <h3 className='hover:text-white'>Offers</h3>
            <h3 className='hover:text-white'>Gift Cards</h3>
        </div>      
        </div>
    </div>
    </>
  )
}

export default SecondNav