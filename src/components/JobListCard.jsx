import React from 'react'

function JobListCard(props) {
  return (
    <div className='w-[100%]  mx-auto space-y-2 p-4 border-[1px] rounded-[.8rem] bg-white'>
        <h5 className='text-[18px] font-bold font-700 text-[#0F172A]'>{props.title}</h5>
        <p className='text-[14px] text-[#94A3B8] font-regular font-400'>{props.subTitle}</p>
        <div className='flex  space-y-2 flex-col'>
            <div className='flex'>
                {props.icon}
                <p className='text-[12px] text-regular text-[#B0B7C3] '>{props.subText}</p>
            </div>
            <div>

            
            <span className='text-[14px] font-medium font-500 text-[#2563EB]'>{props.span1}</span>
            <span className='text-[14px] font-medium font-500 text-[#F6A723]'>{props.span2}</span>
            </div>
            <button className='text-[14px] rounded-[12px] p-[8px] border-[1px] border-[#2563EB] w-full'>{props.btnText}</button>

        </div>
    </div>
  )
}

export default JobListCard