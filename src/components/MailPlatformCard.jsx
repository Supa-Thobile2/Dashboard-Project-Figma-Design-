import React from 'react'

function MailPlatformCard(props) {
  return (
    <div className='flex  justify-between  bg-[white] p-2 gap-4'>
       <div className='flex justify-center  items-center h-[48px] w-[48px] border-[2px] rounded-full'>
        {props.icon}

       </div>
       <div>
        <div className='flex  justify-between  flex-col'>
            <div className=' flex items-center justify-between'>
              <h6 className='text-[14px] font-bold'>{props.heading}</h6>
              <p className='text-[8px] text-regular text-[#64748B]'>{props.date}</p>
            </div>
            <div className=''>
              <p className='text-[8px] font-regular text-[#64748B]'>{props.description}</p>
            </div>
        </div>
       
       </div>
        
        
    </div>
  )
}

export default MailPlatformCard