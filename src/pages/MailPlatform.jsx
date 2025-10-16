import React from 'react'
import { MobileHeader } from '../components'
import Message from './Message'
import { mailPlatform } from '../data/Data'
import MailPlatformCard from '../components/MailPlatformCard'

function MailPlatform() {
  return (
    <div className=' w-full'>
      
        <div className=' '>
            <h3 className='text-[22px] font-bold'>Inbox</h3>
          <div className='bg-[#F1F5F9]'>
            {mailPlatform.map((item, index)=>{
                return <MailPlatformCard 
                key={index}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                date={item.date}
                
                
                />

            })}
            
          </div>
          <div>
          <p className='text-[14px] font-semibold font-600 text-center'>Show 1 of 10 Data</p>
        </div>
        </div>
    </div>
    
  )
}

export default MailPlatform