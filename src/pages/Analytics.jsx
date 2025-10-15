import React from 'react'
import { analyticsData } from '../data/Data'
import { MobileHeader } from '../components'
import AnalyticsCard from '../components/AnalyticsCard'

function Analytics() {
  return (
    <div className=' w-full '>

     
        <div className='w-[90%] border p-6 mx-auto space-y-4 md:flex   flex-col gap-2 md:gap-4'>
          <h3 className='font-bold text-[24px]'>Analytics</h3>
          <p className='font-regular text-[12px] text-[#64748B]'>Monitor progress regularly to increase sales</p>
        <div className='block space-y-4 md:flex'>
        {analyticsData.map((item, index)=>{

          return <AnalyticsCard 
              header={item.header}
              amount={item.amount}
              per={item.per}

          />

            // return <div className='border py-2 px-4 my-4'>
            //     <h4>{item.header}</h4>
            //     <div className='flex items-center gap-2'>
            //         <div>{item.amount}K</div>
            //         <div>{item.per}%</div>
            //     </div>
            // </div>

        })}
        </div>
        </div>
    </div>
  )
}

export default Analytics