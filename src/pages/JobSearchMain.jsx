import React from 'react'

import { FaSearch } from 'react-icons/fa';
import { FaArrowDownZA, FaBars, FaBell, FaUser } from 'react-icons/fa6';
import MailPlatform from './MailPlatform';
import OverView from './OverView'
import MessageOpen from './MessageOpen';
import NewMessage from './NewMessage';
import Inbox from './Inbox';
import Chat from './Chat';
import SearchFilter from './SearchFilter';
import JobSearch from './JobSearch';
import { MobileHeader } from '../components';
import { FaBoltLightning } from 'react-icons/fa6'
import { mailLinksData, directMessageData } from '../data/Data'
import { JobList } from '.';

import { bottomLinks, MenuLinks } from '../data/Data'











function JobSearchMain() {
  return (
    <div className="min-h-[100vh] flex mx-auto ">
        {/* Sidebar section */}
          <div className='hidden md:min-h-[100vh] md:flex flex-col border p-6'>
       
               
                    <div className='flex items-center gap-2 '>
                   
                              <div className='bg-blue-600 p-2  rounded'>
                             <FaBoltLightning color='white'/>
                           </div>
                           <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>
                   
                   
                         </div>
       
               
       
               {/* Menu */}
       
               <div className='  pt-10 flex-1 '>
                   <ul className='space-y-4 lg:space-y-5'>
       
                       {MenuLinks.map((item, index)=>{
                           return <li key={index} className='flex items-center gap-2 '>{item.icon}{item.title} </li>
                       })}
                       
                   </ul>
               </div>
       
               {/* bottom nav */}
       
               <div className='pt-10 flex-end '>
                   <ul className='space-y-2'>
       
                   
                   {bottomLinks.map((item, index)=>{
                       
                      return <li key={index} className='flex items-center gap-2'>{item.icon}{item.title}</li>
                       
                   })}
                   </ul>
                   
               </div>
       
           </div>






        {/* Right section of Main */}
        <div className='w-[100%]   mx-auto md:w-5/6    '>
        {/* navbar section */}
          <div className="sticky inset-0 top-0 w-[100%] mx-auto z-500 ">
           <div className='flex items-center justify-between  bg-white w-[100%]'>
                
           <div className='flex items-center gap-2 p-4'>
   
              <div className='bg-blue-600 p-1  rounded'>
             <FaBoltLightning color='white'/>
           </div>
           <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>
   
   
         </div>
           
            <div>
             
            </div>
            <div className='hidden md:flex items-center justify-between gap-2 '>
              
              <div className='flex items-center justify-between gap-2'>
                <div>
                  <FaBell/>
                </div>
                <div className=' '>
                  <FaUser className='100%'/>
                </div>
                <div>
                  <FaArrowDownZA/>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <FaBars/>
            </div>
            </div>
    
          </div>
          <div className=''>
                   <JobSearch/>
         </div>
   
         
     
    
   
    
        
        </div>
    
        </div>
  )
}

export default JobSearchMain