import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowDownZA, FaBars, FaBell, FaUser } from 'react-icons/fa6';
import MailPlatform from './MailPlatform';
import MessageOpen from './MessageOpen';
import NewMessage from './NewMessage';
import Inbox from './Inbox';
import Chat from './Chat';
import SearchFilter from './SearchFilter';
import { MobileHeader } from '../components';
import { FaBoltLightning } from 'react-icons/fa6'
import { mailLinksData, directMessageData } from '../data/Data'

function MainMail() {
 return (
     <div className="min-h-[100vh] flex">
     {/* Sidebar section */}
     <div className=" hidden md:flex items-center flex-col  md:w-1/6 min-h-[100vh] xl:w-1/6 ">
      <div className=' p-1 md:p-2 w-full bg-[white] '>
      <div className='flex items-center gap-2'>

           <div className='bg-blue-600 p-1  rounded'>
          <FaBoltLightning color='white'/>
        </div>
        <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>


      </div>
     
    </div>
    <div className=' space-y-2 space-x-2  '>
            <ul className='space-y-4'>

                {mailLinksData.map((item, index)=>{
                    return <li key={index} className='flex items-center jusify-center gap-2 text-[.6rem]'>{item.icon}<p className='text-sm'>{item.title}</p> </li>
                })}
                
            </ul>
            <div className='flex items-center justify-between space-y-4 gap-2'>
              <div className=''>
                <h3 className='text-md font-md '>Direct Message</h3>
              </div>
              <div className='bg-blue-600 rounded px-2 py-1 text-white text-sm font-bold'>+</div>
            </div>
            <div className='space-y-2'>
              {directMessageData.map((item, index)=>{
                return <div key={index} className='flex items-center space-y-2 justify-centre gap-2 '>
                  <div className='w-5 h-5 border rounded-full flex items-center text-sm justify-center'>
                      {item.image}
                  </div>
                  <div className='text-sm'>
                    {item.name}
                  </div>
                 
                </div>
              })}

            </div>
        </div>


       
     </div>
     {/* Right section of Main */}
     <div className='w-[100%] px-8  mx-auto md:w-5/6 min-h-[100vh]   '>
     {/* navbar section */}
       <div className="sticky inset-0 top-0 w-full mx-auto z-500 ">
        <div className='flex items-center justify-between'>
 
        
        
         <div>
           <h3 className='text-[1.6rem] font-bold '>Overview</h3>
           <p className="text-[.9rem] font-regular">Detailed Information about your store</p>
         </div>
         <div className='hidden md:flex items-center justify-between gap-4 space-x-1'>
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

      
  
 
<Overview/>
 
     
     </div>
 
     </div>
   
  
  
  
  
  );
}

export default MainMail








