import React from 'react'
import { MobileHeader } from '../components'
import { analyticsData, jobData } from '../data/Data'
import AnalyticsCard from '../components/AnalyticsCard'
import JobsCard from '../components/JobsCard'


function OverView() {
  return (
    <div className='p-4 bg-[grey-200]'>
        <MobileHeader/>
        <h3 className='text-[24px] font-bold text-[#0F172A] '>Welcome, Angela</h3>
        <p className='text-[12px] text-regular text-[#64748B]'>Monday, 05 Agust 2022</p>
        <div className='flex items-center flex-col gap-2'>
            <button className='p-[8px] text-[14px] font-bold text-[#fff] bg-[#2563EB] rounded-[12px] w-full'>Add New Ad Jobs</button>
            <button className='p-[8px] text-[14px] font-bold text-[#0F172A] bg-[#fff] rounded-[12px] w-full'>Add New Ad Jobs</button>
              
        </div>
        <div>
               {analyticsData.map((item, index)=>{
            
                      return <AnalyticsCard 
                          header={item.header}
                          amount={item.amount}
                          per={item.per}
            
                      />
            
                      
            
                    })}
            
        </div>
        <div className='bg-[#fff]'>
            {jobData.map((item, index)=>{

                return <JobsCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                amount={item.amount}
                per={item.per}
                />
            })}
        </div>
    </div>
  )
}

export default OverView