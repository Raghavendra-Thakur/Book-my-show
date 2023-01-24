import React, { useState , createContext } from 'react'
export const TVContext = createContext();
const TVProvider = ({children}) => {
    const [tvshow ,setTVShow] = useState({
        id:0,
        name:"",
        overview:"",
        backdrop_path:"",
        poster_path:"",
    })
  return (
    <>
        <TVContext.Provider value={{tvshow ,setTVShow}}>{children}</TVContext.Provider>
    </>
  )
}

export default TVProvider