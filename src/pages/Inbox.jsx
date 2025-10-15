import React from 'react'
import Message from './Message'
import MessageCard from '../components/MessageCard'
import { inboxData } from '../data/Data'

function Inbox() {
  return (
    <div className='p-4 space-y-2'>
        <h3 className='text-md font-bold'>Inbox</h3>
        <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between gap-2'>
                <p>All</p>
                <p>Unread</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>icon</div>
                <div>icon</div>
            </div>
        </div>
        
        <div className='border-4 rounded-sm p-2'>
        {inboxData.map((item, index)=>{

        return  <MessageCard
        key={index}
          image={item.image}
          messageHead={item.messageHead}
          subText={item.subText}
          date={item.date}
          
          
          />

        })}        
        
        
        
        </div>

    </div>
  )
}

export default Inbox