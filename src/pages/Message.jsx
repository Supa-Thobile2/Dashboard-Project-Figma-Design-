import React from 'react'
import { MessageData } from '../data/Data'
import MessageCard from '../components/MessageCard'

function Message() {
  return (
    <div className='w-[100px] h-full border-4 mx-auto flex justify-center items-center p-4 flex-col' >

      {MessageData.map((item, index)=>{
        console.log(item)
             return <MessageCard
              key={index}
              img={item.img}
              messageHead={item.messageHead}
              subtext={item.subtext}
              date={item.date}
              
              />
              
      })}
        
    </div>
  )
}

export default Message