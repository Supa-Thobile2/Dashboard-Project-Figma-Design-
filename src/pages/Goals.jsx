import React from 'react'
import { MobileHeader } from '../components'
import { FaEllipsis, FaFolder, FaPlus, FaSort } from 'react-icons/fa6'
import { FaCalendar, FaEllipsisH } from 'react-icons/fa'

function Goals() {
  return (
    <div className='w-[90%] mx-auto border-4 p-5 space-y-4 md:p-10'>
      
      <div className='space-y-2'>
        <div className='flex items-center justify-between '>
          <div  className='flex items-center justify-between '>
            <select name="" id="" >
              <option value="allgoals" className='ml-2 text-xl text-bold'>All goals</option>
            </select>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <FaPlus/>
            <p className='text-bold text-[1rem] font-900'>New Goals</p>
          </div>
        </div>
        <div className='bg-white  space-y-2 '>

          <div className='flex justify-center items-center border-b-[1px] border-[light-grey] p-1 gap-8'>
            <div className='flex items-center gap-1.5 text-[.95rem] '><FaSort/> <p>Sort by: Update</p></div>
            <div className='flex items-center gap-1.5 text-[.95rem]'><FaFolder/> <p>folders: Show</p></div>
          </div>
          <div className='flex items-center justify-between p-4'>
            <div><button className='p-[8px] bg-[#EFF6FF]'>Active</button></div>
            <div><button>Completed</button></div>
            <div><button>Archived</button></div>
          </div>

        </div>
        <div>
          <div className='p-4'>
            <div className='flex items-center justify-between '>
              <div>
                <p className='text-xl'>Sales</p>
                </div>
              <div><FaEllipsis/></div>
            </div>
            <h4 className='py-2'>Grow revenue in America</h4>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='flex items-center justify-between space-y-4'>
              <div className='flex gap-2 items-center justify-center'><FaCalendar/>date</div>
              <div >image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals