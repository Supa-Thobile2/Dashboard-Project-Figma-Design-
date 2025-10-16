import React from 'react'
import { FaCross } from 'react-icons/fa6'


function SearchFilter() {
  return (
    <div className='w-[50%] mx-auto'>
        <div className='flex items-center justify-between py-2 px-2 w-[80%] mx-auto'>
            <div className='flex justify-between items-center gap-4'>
                <h5 className='text-md font-bold'>Search Email</h5>
               
            </div>
            <div>
               <FaCross/>
            </div>
        </div>
        <div className='border  p-2 w-[80%] mx-auto'>
          <form className='w-[100%] mx-auto'>
            <div className='w-full p-2'>
              <label className='text-md font-bold'>Browse</label>
              <div className='flex items-center justify-between  border rounded-sm w-full'>
                <div>All Media</div>
                <div><FaCross/></div>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>From</label>
              <div className='flex items-center justify-between py-1'>
               <input type='text' placeholder='Darrel Steward'  className='border rounded-sm w-full'/>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>To</label>
              <div className='flex items-center justify-between py-1'>
                <input type='text' placeholder='Email, come separated'  className='border rounded-sm w-full'/>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>Keyword</label>
              <div className='flex items-center justify-between py-1'>
                <input type='text' placeholder='Try Meeting'  className='border rounded-sm w-full'/>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>Browse</label>
              <div className='flex items-center justify-between py-1'>
                <input type='text' placeholder='1 Month'  className='border rounded-sm w-full'/>
              </div>
            </div>
            <div className='w-full p-1 '>
              <label className='text-md font-bold '>Custom Date</label>
              <div className='flex items-center justify-between py-1'>
                <div className='flex items-center justify-between w-full'>
              <input type='text' placeholder='dd/mm/yy' className='border rounded-sm w-full'/>
              </div>
              </div>
            </div>
            <div className='flex items-center flex-col justify-center space-y-1 gap-2'>
              <button className='border rouded-sm w-full p-1'>Search</button>
              <button className='border rouded-sm w-full p-1'>Create Filters</button>
            </div>
          </form>

        </div>

    </div>
  )
}

export default SearchFilter