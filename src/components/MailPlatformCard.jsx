import React from 'react'

function MailPlatformCard(props) {
  return (
    <div className='p-4 flex items-center justify-center gap-4 bg-[white]'>
       <div className='flex justify-center  items-center h-[10rem] w-[10rem] border-[2px] rounded-full'>
        {props.icon}

       </div>
       <div>
        <div className='flex  flex-col space-y-2'>
            <div className='text-left flex items-center justify-between'>
              <h6 className='text-md font-bold'>{props.heading}</h6>
              <p className='text-sm text-regular text-[#64748B]'>{props.date}</p>
            </div>
            <div className=''>
              <p className='text-sm font-regular text-[#64748B]'>{props.description}</p>
            </div>
        </div>
       
       </div>
        
        
    </div>
  )
}

export default MailPlatformCard