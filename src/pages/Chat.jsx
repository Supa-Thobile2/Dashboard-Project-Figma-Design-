import React from 'react'
import { FaStar } from 'react-icons/fa'

function Chat() {
  return (
    <div className='p-4 space-y-4'>
        <div className='flex items-center justify-between gap-2'>
            <h3>Meeting with new client</h3>
            <div className='flex items-center gap-2'>
                <div>icon</div>
                <div>icon</div>
            </div>
        </div>
        <div className='flex items-center justify-between py-2'>
            <div className='h-10 w-10 border rounded-full flex items-center justify-center '>
                Image
            </div>
            <div>
                <p className='text-sm font-bold'>Darrel Steward</p>
                <div>
                    <select>
                        <option value=''></option>
                    </select>
                </div>
            </div>
            <div>icon</div>
            <div>
                <FaStar/>
            </div>
            <div>icon</div>
        </div>
        <div className='border space-y-4 '>
            <h5 className='text-md font-bold'>Translate Message</h5>
            <span className='py-2'>Dec 27 2001 08:00 AM</span>
            <p>Hi! Good morning </p>
            <p>Today we will have a meeting with a client at 10 am. Prepare your selves guys okay! Edward will present it At neque, luctus dictum sit lobortis. Urna pharetra enim, nec et, ridiculus fringilla faucibus id aliquam...</p>
            <p>Kind Regards, Darrel S.</p>

        </div>
    </div>
  )
}

export default Chat