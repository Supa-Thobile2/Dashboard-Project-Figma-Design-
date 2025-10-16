import React from 'react'
import { MobileHeader } from '../components'
import { FaSearch } from 'react-icons/fa'
import { FaArrowDown, FaLocationPin, FaFilter } from 'react-icons/fa6'
import { FcClearFilters } from 'react-icons/fc'
import { jobListData } from '../data/Data'
import JobListCard from '../components/JobListCard'

function JobList() {
  return (
    <div className='w-[100%]  mx-auto'>
      
        <div className='space-y-2'>
        <div className='p-4 bg-[white] w-[90%] mx-auto'>

        
        <div className='flex items-center justify-center gap-2 border-b-[1px] text-sm p-4'>
            <FaSearch size={8}/>
            <input type="search" name="jobtitle" id="jbt"  placeholder='Job Title, Company, or Keywords' className='w-full  text-sm'/>
        </div>
          <div className='flex items-center justify-center p-2 gap-2 '>
            <div className='flex items-center justify-center gap-2'>
            <FaLocationPin  size={8}/>
            <input type="search" name="jobtitle" id="jbt" placeholder='Select Location' className='w-full text-sm'/>
            <FaArrowDown  size={8}/>
            </div>
            <FaFilter  size={8}/>
                
        <button className='p-[8px] rounded-[12px] bg-[#2563EB] w-[100%]'>Search</button>
        </div>
    
        </div>
        <div className='flex items-center justify-between flex-wrap gap-2  w-[90%] mx-auto'>
            {jobListData.map((item, index)=>{
                return <JobListCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                subText={item.subText}
                btnText={item.btnText}
                icon={item.icon}

                
                />

            })}
        </div>
        <p>Show 1</p>
        </div>

    </div>
  )
}

export default JobList