import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowDownZA, FaBars, FaBell, FaUser } from 'react-icons/fa6';
import MailPlatform from './MailPlatform';
import MessageOpen from './MessageOpen';
import NewMessage from './NewMessage';
import Inbox from './Inbox';
import Chat from './Chat';
import SearchFilter from './SearchFilter';

function MainMail() {
 return (
     <div className="min-h-[100vh] flex">
     {/* Sidebar section */}
     <div className="  md:w-1/6 min-h-[100vh] xl:w-1/6 ">
       {/* <SideBar/> */}
     </div>
     {/* Right section of Main */}
     <div className='w-[100%]  mx-auto md:w-5/6 border-4 min-h-[100vh]  border-6 flex-grow'>
     {/* navbar section */}
       <div className="sticky inset-0 top-0 w-full mx-auto z-500 p-4">
        <div className='flex items-center justify-between'>
 
        
        
         <div>
           <h3 className='text-[1.6rem] font-bold '>Overview</h3>
           <p className="text-[.9rem] font-regular">Detailed Information about your store</p>
         </div>
         <div className='hidden md:flex items-center justify-between gap-4 space-x-4'>
           <div className="border flex items-center  p-[.5rem] rounded-[0.9rem]">
             <FaSearch/>
             <input type="text" name="search" id="search" className="w-full outline-none"/>
 
           </div>
           <div className='flex items-center justify-between gap-4'>
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
<SearchFilter/>
      
  
 
 
 
     
     </div>
 
     </div>
   );
}

export default MainMail








