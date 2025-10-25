import React from 'react'
import { FaBars, FaBell, FaSearch, FaUser } from 'react-icons/fa'
import { FaArrowDownZA, FaBoltLightning } from 'react-icons/fa6'
import { directMessageData, mailLinksData } from '../data/Data'
import { MailListCard } from '../components'

function MailList() {
return (
    
<div className="min-h-[100vh] flex ">
     {/* Sidebar section */}
     <div className=" hidden   md:flex items-center flex-col  md:w-1/6 min-h-[100vh] xl:w-1/6 ">
           <div className=' p-4  w-full bg-[white] '>
           <div className='flex items-center gap-2'>
     
                <div className='bg-blue-600 p-1  rounded'>
               <FaBoltLightning color='white'/>
             </div>
             <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>
     
     
           </div>
          
         </div>
         <div className=' mt-20  '>
                 <ul className='space-y-2'>
     
                     {mailLinksData.map((item, index)=>{
                         return <li key={index} className='flex items-center  gap-4 '><span className='pl-2'>{item.icon}</span><p className='text-[18px] pr-2'>{item.title}</p> </li>
                     })}
                     
                 </ul>
                
                 <div className='space-y-2 mt-20'>
                    <div className='flex items-center justify-between space-y-4 gap-4'>
                   <div className='flex items-center justify-center'>
                     <h3 className='text-md font-md '>Direct Message</h3>
                   </div>
                   <div className='bg-blue-600 rounded px-2 py-1 text-white text-sm font-bold'>+</div>
                 </div>
                   {directMessageData.map((item, index)=>{
                     return <div key={index} className='flex items-center  justify-centre gap-4 p-[8px]'>
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
     <div className='mx-auto md:w-5/6 min-h-[100vh]   '>
     {/* navbar section */}
      <div className="p-4 sticky inset-0 top-0 w-full mx-auto z-500 bg-white">
              <div className='flex items-center justify-between'>
       
              
              
               <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
      
                 <div className='bg-blue-600 p-1  rounded'>
                <FaBoltLightning color='white'/>
              </div>
              <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>
      
      
            </div>
                 
                 <div className="">
                 <FaBars/>
               </div>
               </div>
               <div className='hidden md:flex items-center justify-between gap-4 space-x-1'>
                 <div className="">
                   <FaSearch/>
                   {/* <input type="text" name="search" id="search" className="w-full outline-none"/> */}
       
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
             <div className=''>
                <h6>Inbox</h6>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <div>icon</div>
                        <div>folder</div>
                        <div>trash</div>
                        <div>icon</div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div>1-50 of 2022</div>
                        <div className='flex items-0center justify-between'>
                            <div>icon</div>
                            <div>icon</div>
                        </div>
                    </div>
                </div>
                <div classname=''>
                    <div className='py-2'>
                        <h6 className='py-2'>Today</h6>
                        <MailListCard/>
                        <MailListCard/>
                        <MailListCard/>
                    </div>
                    <div className='py-2'>
                        <h6 className='py-2'>Yesterday</h6>
                        <MailListCard/>
                        <MailListCard/>
                        <MailListCard/>
                    </div>
                </div>
             </div>

      
<div>


    </div>
 

 
     
     </div>
 
     </div>


  )
}

export default MailList