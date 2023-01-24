import React from "react";
import { BiChevronDown, BiMenu, BiSearch, BiBell ,BiCreditCardAlt,BiSupport,BiHomeSmile} from "react-icons/bi";
import {RiTicketLine, RiAirplayFill,RiSettings5Line,RiGiftLine} from 'react-icons/ri'
import pic from "../../asset/logo.png"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";



function NavSm() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-white">
          <h3 className="text-xl font-bold">It All Starts Here</h3>
          <span className="text-grey-400 text-xs flex item-center cursor-pointer hover:text-white">
            Delhi NCR
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}



function Navlg() {
  const sideRef = useRef();
  const [isOpen , setIsOpen] = useState(false)
  useEffect(()=>{
    const closeSidebar = e => {
       console.log(e);
   
       if(!sideRef.current.contains(e.target)){
        setIsOpen(false);
        console.log(sideRef.current)
       }
     
    } 
    document.body.addEventListener('click' , closeSidebar)
    return () => document.body.removeEventListener('click' ,closeSidebar)
  },[])
  return (
    <>
     <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
        <div className="w-88 h-10">
            <img 
            src={pic}
            alt="logo"
            className="w-full h-full"
            
            />
        </div>
       
        <div className=" w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch/>
          <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Seatch for Movies,Events,Plays,Sports And Activites"
        /></div>
         </div>
     
        <div className="flex item-center gap-5">
          <span className="text-gray-200 text-base flex item-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown/>
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          
          <div className="w-8 h-8 text-white">
          
            <button ref={sideRef}  onClick={()=> setIsOpen(true)} className='w-full h-full' ><BiMenu className='w-full h-full' /></button>
            
          <div  className= {!isOpen ? 'hidden' : 'flex'}>
            <div className='fixed top-0 right-0 bg-white w-[32vw] h-full z-50'>
              <div className=' bg-darkBackground-700'>
              <h1 className='text-white font-bold p-5 text-xl'>Hey!</h1>
              </div>
              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <BiBell className="text-black w-8 h-8 ml-5 pt-2"/>
                  </div>
                  <div>
                  <h1 className="text-black">Notification</h1>
                  <span className="text-gray-400">See Your Notification</span>
                  </div>
              </div>
              
              <div className="p-2">
                <hr />
              </div>

              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <RiTicketLine className="text-black w-8 h-8 ml-5 pt-2"/>
                  </div>
                  <div>
                  <h1 className="text-black">Your Orders</h1>
                  <span className="text-gray-400">View All Booking And Purchase</span>
                  </div>
              </div>
             
              <div className="p-2">
                <hr />
              </div>

              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <RiAirplayFill className="text-black w-8 h-8 ml-5 pt-2"/>
                  </div>
                  <div>
                  <h1 className="text-black">Stream Library</h1>
                  <span className="text-gray-400">Rented And Purchased Movie</span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>

              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <BiCreditCardAlt className="text-black w-8 h-8 ml-5 pt-2"/> 
                  </div>
                  <div>
                  <h1 className="text-black">Play Credit Card</h1>
                  <span className="text-gray-400">View Your Play Credit Card Details And Offers</span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>
              
              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <BiSupport className="text-black w-8 h-8 ml-5 pt-2"/> 
                  </div>
                  <div>
                  <h1 className="text-black">Help & Support</h1>
                  <span className="text-gray-400">View commonly asked questions </span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>
             
              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <RiSettings5Line className="text-black w-8 h-8 ml-5 pt-2"/> 
                  </div>
                  <div>
                  <h1 className="text-black">Accounts & Settings</h1>
                  <span className="text-gray-400">Location, Payment, Permissions & MOre</span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>
              
              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <RiGiftLine className="text-black w-8 h-8 ml-5 pt-2"/> 
                  </div>
                  <div>
                  <h1 className="text-black">Rewards</h1>
                  <span className="text-gray-400">View Your Play Credit Card Details And Offers</span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>
             
              <div className=" flex items-center h-12 mt-2 ml-2  gap-4">
                  <div>
                  <BiHomeSmile className="text-black w-8 h-8 ml-5 pt-2"/> 
                  </div>
                  <div>
                  <h1 className="text-black">Book A Smile</h1>
                  <span className="text-gray-400">View Your Play Credit Card Details And Offers</span>
                  </div>
              </div>

              <div className="p-2">
                <hr />
              </div>
           
            </div>
          </div>
            
          
          </div>
        </div>
      </div>
    </>
  );
}

//main component
const Navbar = () => {
  return (<>
    <nav className="bg-darkBackground-700 px-4 py-3">
      <div className="md:hidden">
        <NavSm/>
      </div>
     
      <div className="hidden  md:flex">
        <Navlg/>
      </div>

    </nav>
 
    </>
  );
};

export default Navbar;
