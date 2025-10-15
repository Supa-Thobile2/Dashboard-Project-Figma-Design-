import React from 'react'
import { MobileHeader } from '../components'
import { FaPlus } from 'react-icons/fa6'

function NewMessage() {
  return (
    <div>

    <div className='p-2'>
        <div  className='flex justify-between items-center'>
            <div>
                <p className='text-md font-bold '>New Message</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>icon</div>
                <div>icon</div>
            </div>
        </div>
        <div>
            <p classname='text-sm font-medium font-500'>Send to</p>
            <div>
                <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>darrelsteward@mail.com</p>
                <p className='text-sm font-medium text-[#2563EB]  rounded-[12px] bg-[#F8FAFC]'>arlen.mc@mail.com</p>
            </div>
            <div>
                <p className='text-sm font-medium text-[#64748B]'>Subjects</p>
                <p className='text-sm text-[#0F172A] font-bold font-700'>Meeting with new client</p>
            </div>
            <div>
                <p classname='text-sm text-[#0F172A]'>Hi! Good morning guys 👋</p><br/>
                <p classname='text-sm text-[#0F172A]'>Today we will have a meeting with a client at 10 am. Prepare your selves guys okay! Edward will present it At neque, luctus dictum sit lobortis. Urna pharetra enim, nec et, ridiculus fringilla faucibus id aliquam. Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat enim sed scelerisque habitant nisi.<br/><br/>Tempus et lorem semper a commodo enim tristique. Imperdiet et egestas leo amet adipiscing orci. Rhoncus dictum sit aliquam feugiat.</p><br/>
                <p classname='text-sm text-[#0F172A]'>Regard, <br/>Angel ❤</p>
            </div>
            <div className='flex items-center w-[100%]'>
                <div className='w-[48px] h-[48px] rounded-[1000px] flex items-center justify-center'><FaPlus color={'#808080'} className='w-[24px] h-[24px] '/></div>
                <button className='rounded-[12px] bg-[#2563EB] text-[#fff] p-[8px] w-full '>Send Message</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewMessage