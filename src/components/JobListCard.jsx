import React from 'react'

function JobListCard(props) {
  return (
    <div className='p-3 border bg-[#fff]'>
        <h5 className='text-[18px] font-bold text-[#0F172A]'>{props.title}</h5>
        <p className='text-[14px] text-[#94A3B8] font-regular font-400'>{props.subTitle}</p>
        <div className='flex   flex-col'>
            <div className='flex'>
                {props.icon}
                <p className='text-[12px] text-regular text-[#94A3B8] '>{props.subText}</p>
            </div>
            <div>

            
            <span>{props.span1}</span>
            <span>{props.span2}</span>
            </div>
            <button className='rounded-[12px] p-[8px] border-[1px] border-[#2563EB] w-full'>{props.btnText}</button>

        </div>
    </div>
  )
}

export default JobListCard