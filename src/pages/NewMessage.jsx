import React from 'react'
import { MobileHeader } from '../components'
import { FaArrowDownZA, FaBars, FaBell, FaBoltLightning, FaPlus, FaUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { directMessageData, mailLinksData } from '../data/Data'

function NewMessage() {
  return (
    // <div>

    // <div className=' p-2'>
    //     <div  className='flex justify-between items-center'>
    //         <div>
    //             <p className='text-md font-bold '>New Message</p>
    //         </div>
    //         <div className='flex justify-between items-center'>
    //             <div>icon</div>
    //             <div>icon</div>
    //         </div>
    //     </div>
    //     <div className='space-y-1'>
    //         <p classname='text-sm font-medium font-500'>Send to</p>
    //         <div className='space-y-1'>
    //             <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>darrelsteward@mail.com</p>
    //             <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>arlen.mc@mail.com</p>
    //         </div>
    //         <div className='space-y-1'>
    //             <p className='text-sm font-medium text-[#64748B]'>Subjects</p>
    //             <p className='text-sm text-[#0F172A] font-bold font-700'>Meeting with new client</p>
    //         </div>
    //         <div className='space-y-2'>
    //             <p classname='text-sm text-[#0F172A]'>Hi! Good morning guys 👋</p>
    //             <p classname='text-sm text-[#0F172A]'>Today we will have a meeting with a client at 10 am. Prepare your selves guys okay! Edward will present it At neque, luctus dictum sit lobortis. Urna pharetra enim, nec et, ridiculus fringilla faucibus id aliquam. Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat enim sed scelerisque habitant nisi.<br/><br/>Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat.</p>
    //             <p classname='text-sm text-[#0F172A]'>Regard, <br/>Angel ❤</p>
    //         </div>
    //         <div className='flex items-center w-[100%] py-2'>
    //             <div className='w-[28px] h-[28px] rounded-[1000px] flex items-center justify-center'><FaPlus color={'#808080'}  /></div>
    //             <button className='rounded-[12px] bg-[#2563EB] text-[#fff] p-[8px] w-full '>Send Message</button>
    //         </div>
    //     </div>
    // </div>
    // </div>
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
            <div className='space-y-2 flex-1'>
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

      
<div>

 <div className=' p-2'>
        <div  className='flex justify-between items-center'>
            <div>
                <p className='text-md font-bold '>New Message</p>
            </div>
    /       <div className='flex justify-between items-center'>
    /           <div>icon</div>
                <div>icon</div>
            </div>
        </div>
        <div className='space-y-1'>
            <p classname='text-sm font-medium font-500'>Send to</p>
            <div className='space-y-1'>
    /           <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>darrelsteward@mail.com</p>
    /           <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>arlen.mc@mail.com</p>
            </div>
            <div className='space-y-1'>
                <p className='text-sm font-medium text-[#64748B]'>Subjects</p>
    /           <p className='text-sm text-[#0F172A] font-bold font-700'>Meeting with new client</p>
            </div>
            <div className='space-y-2'>
                <p classname='text-sm text-[#0F172A]'>Hi! Good morning guys 👋</p>
                <p classname='text-sm text-[#0F172A]'>Today we will have a meeting with a client at 10 am. Prepare your selves guys okay! Edward will present it At neque, luctus dictum sit lobortis. Urna pharetra enim, nec et, ridiculus fringilla faucibus id aliquam. Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat enim sed scelerisque habitant nisi.<br/><br/>Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat.</p>
                <p classname='text-sm text-[#0F172A]'>Regard, <br/>Angel ❤</p>
            </div>
            <div className='flex items-center w-[100%] py-2'>
                <div className='w-[28px] h-[28px] rounded-[1000px] flex items-center justify-center'><FaPlus color={'#808080'}  /></div>
                <button className='rounded-[12px] bg-[#2563EB] text-[#fff] p-[8px] w-full '>Send Message</button>
            </div>
        </div>
    </div>
    </div>
 

 
     
     </div>
 
     </div>


  )
}

export default NewMessage