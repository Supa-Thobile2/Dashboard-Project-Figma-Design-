import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { DirectMessageCard } from '../components'

function DirectMessage() {
  return (
    <div className='flex items-center justify-center flex-col p-8 h-[100vh]'>

        <div className='w-[100%] h-100 mx-auto border rounded-[12px] p-4 space-y-2'>
            <div className=' flex items-center justify-between border-b-[1px] py-2'>
                <div><h6>Contacts</h6></div>
                <div>
                    <div>
                        <FaTimes/>
                    </div>
                </div>
            </div>
            <div className='p-2  flex items-center justify-center border-[1px] rounded-[12px]'>
                <FaSearch/>
                <input type="text" placeholder='search by name or email...' className='w-full pl-2 outline-none ' />

            </div>
            <div className='space-y-2'>
                <h6>Recent Contacts</h6>
                <div>
                    <DirectMessageCard/>

                </div>
            </div>
            <div className='space-y-2'>
                <h6>All Contacts</h6>
                <div>
                    <DirectMessageCard/>

                </div>
            </div>
        </div>

    </div>

  )
}

export default DirectMessage