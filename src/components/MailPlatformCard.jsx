import React from 'react'

function MailPlatformCard(props) {
  return (
    <div className='p-8 flex items-center justify-between gap-2 bg-[white]'>
       <div className='flex justify-center  items-center h-[40px] w-[40px] border-[2px] rounded-full'>
        {props.icon}

       </div>
       <div>
        <div className='flex  flex-col '>
            <div className='text-left'>
              <h6 className='text-[16px] font-bold'>{props.heading}</h6>
            </div>
            <div className=''>
              <p className='text-[14px] font-regular text-[#64748B]'>{props.description}</p>
            </div>
        </div>
       
       </div>
        <p className='text-[14px] text-regular text-[#64748B]'>{props.date}</p>
        
    </div>
  )
}

export default MailPlatformCard