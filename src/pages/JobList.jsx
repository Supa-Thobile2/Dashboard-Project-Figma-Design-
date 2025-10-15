import React from 'react'
import { MobileHeader } from '../components'
import { FaSearch } from 'react-icons/fa'
import { FaArrowDown, FaLocationPin, FaFilter } from 'react-icons/fa6'
import { FcClearFilters } from 'react-icons/fc'
import { jobListData } from '../data/Data'
import JobListCard from '../components/JobListCard'

function JobList() {
  return (
    <div className='p-4'>
        <MobileHeader/>
        <div className='space-y-3'>
        <div className='p-2 bg-[white]'>

        
        <div className='flex items-center justify-center gap-2 border-b-[1px] p-4'>
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
        <div className='space-y-4'>
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