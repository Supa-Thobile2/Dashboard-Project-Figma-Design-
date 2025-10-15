import React from 'react'
import { FaBoltLightning } from 'react-icons/fa6'

function MobileHeader() {
  return (
    <div className='block md:hidden p-3 md:p-4 sticky top-0 z-3 w-full bg-[white] '>
      <div className='flex items-center gap-2'>

           <div className='bg-blue-600 p-2  rounded'>
          <FaBoltLightning color='white'/>
        </div>
        <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>


      </div>
     
    </div>
  )
}

export default MobileHeader