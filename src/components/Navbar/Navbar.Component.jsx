import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import pic from "../../asset/logo.png"

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
            <BiMenu className="w-full h-full"/>
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
