import React from 'react'
import { MobileHeader, SearchCard } from '../components'
import { FaSearch } from 'react-icons/fa'
import { FaArrowDown, FaFilter, FaLocationPin } from 'react-icons/fa6'
import { jobSearchData } from '../data/Data'



function JobSearch() {
  return (
     <div className=''>
       
         <div className=''>
         <div className='p-2 bg-[white]'>
 
         
         <div className='flex items-center justify-center gap-2 border-b-[1px] '>
             <FaSearch/>
             <input type="search" name="jobtitle" id="jbt"  placeholder='Job Title, Company, or Keywords' className='w-full'/>
         </div>
           <div className='flex items-center justify-center p-4 '>
             <div className='flex items-center justify-center'>
             <FaLocationPin/>
             <input type="search" name="jobtitle" id="jbt" placeholder='Select Location' className='w-full'/>
             <FaArrowDown/>
             </div>
             <FaFilter/>
         </div>
         <button className='p-[8px] rounded-[12px] bg-[#2563EB] w-full'>Search</button>
         </div>
         <p className='text-[14px] font-regular font-400 '>Showing: <span className='font-bold text-[14px] font-700 '>60 filtered jobs</span></p>
         <div className='p-8 bg-white space-y-1 rounded-[12px]'>
            
             {jobSearchData.map((item, index)=>{
                 return <SearchCard
                 key={index}
                 title={item.title}
                 subTitle={item.subTitle}
                 span1={item.span1}
                 span2={item.span2}
                 btnText={item.btnText}
            
                 
 
                 
                 />
 
             })}
            
         </div>
         <p>Show 1</p>
         </div>
 
     </div>
   )
}

export default JobSearch