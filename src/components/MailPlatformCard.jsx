import React from 'react'

function MailPlatformCard(props) {
  return (
    <div className='flex items-center justify-between  bg-[white] p-6'>
       <div className='flex justify-center  items-center h-[48px] w-[48px] border-[2px] rounded-full'>
        {props.icon}

       </div>
       <div>
        <div className='flex  justify-between  flex-col'>
            <div className=' flex items-center justify-between'>
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