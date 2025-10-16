import React from 'react'
import { FaUser } from 'react-icons/fa6'

function JobsCard(props) {
  return (
    <div className='flex items-center justify-between py-4 px-2 border-t-[1px] border-b-[1px]'>
        <div className='space-y-2'>
            <p className='text-[14px] font-semibold font-600'>{props.title}</p>
            <p className='text-[12px] font-medium text-[#94A3B8]#94A3B8'>{props.subTitle}</p>
        </div>
        <div>chart</div>
        <div className='flex items-center justify-evenly gap-2'>
            <div><FaUser/></div>
            <div>
            <p className='text-[12px] font-medium font-500 text-[#0F172A] '>{props.amount}</p>
            </div>
            <div>
                <p>+{props.per}%</p>
            </div>
        </div>
    </div>
  )
}

export default JobsCard