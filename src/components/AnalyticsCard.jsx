import React from 'react'

function AnalyticsCard(props) {
  return (
    <div className='border rounded-[.9rem] w-full  mx-auto md:rounded-[1px] p-2'>
                <h3 className='text-[14px] font-semibold text-[#64748B]'>{props.header}</h3>
                <p></p>
                <div className='flex  items-center  gap-2 p-2 '>
                    <div className='text-[16px] font-bold'>{props.amount}K</div>
                    <div className='text-[8px] font-medium text-[#ED4F9D]'>{props.per}%</div>
                </div>
            </div>
  )
}

export default AnalyticsCard