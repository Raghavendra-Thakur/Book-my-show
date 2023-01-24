import React from 'react'
import {GiHut} from "react-icons/gi";
import {BiSupport} from "react-icons/bi"
import {IoTicketOutline} from "react-icons/io5";
import {GoMailRead} from 'react-icons/go'
import {TfiFacebook,TfiInstagram,TfiTwitterAlt,TfiPinterest,TfiYoutube,TfiLinkedin } from 'react-icons/tfi'
import {BsYoutube} from 'react-icons/bs'
const Footer = () => {
  return (<>
    <div className='hidden lg:block'>
        <div className=' bg-darkBackground-800'>
            <div className='flex items-center justify-between container mx-auto'>
                <div className=' flex gap-4 h-24 w-full items-center text-white'>
                    <GiHut className=' h-8 w-auto'/>
                    <h1 className='font-semibold'>List Your Show</h1>
                    <h1>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h1>
                </div>
                <div>
                    <button className=' bg-red-600 p-2 rounded text-white'>Contact today!</button>
                </div>
            </div>
        </div>
        <div className='bg-darkBackground-700'>
            <div className=' container mx-auto flex items-center justify-around  '>
                <div className='text-gray-400 flex flex-col gap-3 justify-center mt-5'>
                    <BiSupport className='h-12 w-auto '/>
                    <h1>24/7 CUSTOMER CARE</h1>
                </div>
                <div className='text-gray-400 flex flex-col gap-3 justify-center mt-5'>
                    <IoTicketOutline className='h-12 w-auto '/>
                    <h1>RESEND BOOKING CONFIRMATION</h1>
                </div>
                <div className='text-gray-400 flex flex-col gap-3 justify-center mt-5'>
                    <GoMailRead className='h-12 w-auto '/>
                    <h1>SUBSCRIBE TO THE NEWSLETTER</h1>
                </div>
            </div>
        </div>
        <div className=' bg-darkBackground-800'>
            <div className='container mx-auto text-gray-400 '>
                <div className='pt-5'>
                    <h1 className='font-semibold'>Movies Now Showing in Mumbai</h1>
                    <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime ut veniam ipsa repudiandae! Neque ad nisi exercitationem omnis aut placeat a nulla ab minima! Facere fuga cumque exercitationem impedit?</span>
                </div>
                <div className='pt-5'>
                    <h1 className='font-semibold'>Upcoming Movies in Mumbai</h1>
                    <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime ut veniam ipsa repudiandae! Neque ad nisi exercitationem omnis aut placeat a nulla ab minima! Facere fuga cumque exercitationem impedit?</span>
                </div>
                <div className='pt-5'>
                    <h1 className='font-semibold'>Movie Updates and Celebrities</h1>
                    <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime ut veniam ipsa repudiandae! Neque ad nisi exercitationem omnis aut placeat a nulla ab minima! Facere fuga cumque exercitationem impedit?</span>
                </div>
                <div className='pt-5'>
                    <h1 className='font-semibold'>Movies Per Week</h1>
                    <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime ut veniam ipsa repudiandae! Neque ad nisi exercitationem omnis aut placeat a nulla ab minima! Facere fuga cumque exercitationem impedit?</span>
                </div>
                <div className='pt-5 pb-5'>
                    <h1 className='font-semibold'>Movies By Genre</h1>
                    <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime ut veniam ipsa repudiandae! Neque ad nisi exercitationem omnis aut placeat a nulla ab minima! Facere fuga cumque exercitationem impedit?</span>
                </div>
            </div>
        </div>
    
    <div className='bg-darkBackground-800 text-gray-400'>
    <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-700 "/>
    </div>
    <div className=' bg-darkBackground-800 pt-5 '>
            
        <div className='container mx-auto flex justify-center gap-4 items-center '>
            
            <div className='w-full border-t border-gray-400'>

            </div>
            <div>
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="bk" className='h-20 ' />
            </div>
        
            <div className='w-full border-t border-gray-400'>
              
            </div>

        </div>

        <div className='pt-2 flex items-center  gap-4 justify-center'>

            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <TfiFacebook className='w-6 h-6 my-3 mx-auto '/>
            </div>
           
            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <TfiTwitterAlt className='w-6 h-6 my-3 mx-auto '/>
            </div>
           
            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <TfiInstagram className='w-6 h-6 my-3 mx-auto '/>
            </div>
           
            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <BsYoutube className='w-6 h-6 my-3 mx-auto '/>
            </div>
           
            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <TfiPinterest TfiInstagram className='w-6 h-6 my-3 mx-auto '/>
            </div>
            
            <div className=' bg-gray-600 rounded-full h-12 w-12 '>
                <TfiLinkedin className='w-6 h-6 my-3 mx-auto '/>
            </div>

        </div>

        <div className='text-center text-gray-400 pt-5'>
            <h1>THIS IS MADE FOR EDUCATION PURPOSE</h1>
            <h1>
            The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
            </h1>
        </div>
    </div>

    </div>
    </>
  )
}

export default Footer