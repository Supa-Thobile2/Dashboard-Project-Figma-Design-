import React from 'react'

function DirectMessageCard() {
  return (
    <div className='px-4 py-1 w-full mx-auto border flex items-center justify-between '>
        <div className='h-15 w-15 rounded-full border'> 
                image
        </div>
        <div className='space-y-1'>
            <h3 classname='text-[16px] text-bold'>Kylee Danford</h3>
            <p className='text-[12px] text-regular font-400'>kyledunford@gmail.com</p>

        </div>
       
       

    </div>
  )
}

export default DirectMessageCard