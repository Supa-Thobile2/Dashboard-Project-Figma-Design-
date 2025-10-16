import React from 'react'

function JobListCard(props) {
  return (
    <div className='w-[100%] md:w-[50%]  mx-auto space-y-2 p-4 border-[1px] rounded-[.8rem] bg-white'>
        <h5 className='text-[1rem] font-bold text-[#0F172A]'>{props.title}</h5>
        <p className='text-[.9rem] text-[#94A3B8] font-regular font-400'>{props.subTitle}</p>
        <div className='flex  space-y-2 flex-col'>
            <div className='flex'>
                {props.icon}
                <p className='text-[.9rem] text-regular text-[#94A3B8] '>{props.subText}</p>
            </div>
            <div>

            
            <span>{props.span1}</span>
            <span>{props.span2}</span>
            </div>
            <button className='text-[.9rem] rounded-[12px] p-[8px] border-[1px] border-[#2563EB] w-full'>{props.btnText}</button>

        </div>
    </div>
  )
}

export default JobListCard