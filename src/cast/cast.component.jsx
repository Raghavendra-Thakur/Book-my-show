import React from 'react'
const CastComponent = (props) => {

  return (<>    
    
  

    <div className='flex flex-col item-center justify-center mx-auto '>
        <div className='w-32 h-32 '>
            <img  
            src={`https://image.tmdb.org/t/p/original${props.image}`} 
            alt="cast and crew"
            className='w-full h-full rounded-full object-cover object-center'
            />
        </div>
        <div className='flex-row '>
        <h5 className='text-lg text-gray-800 '>{props.castName}</h5>
        <h5 className='text-lg text-gray-800 '>{props.role}</h5>
        </div>
    </div>
  
  </>
)
}

export default CastComponent