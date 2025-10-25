import React from 'react'

function MessageCard(props) {
  return (
    <div className="w-full flex justify-between items-center border-t-1 border-b-1 mx-auto border-[1px] gap-2 p-2">
              <div className="rounded-full border h-[60px] w-[60px] flex justify-center items-center flex-col m-2">
                {props.img}
              </div>
              <div className="p-2 ">
                <h3 className='text-[14px] font-bold font-700 text-[#0F172A]'>{props.messageHead}</h3>
                <p className='text-[14px] font-regular font-400 '>
                    {props.subtext}

                </p>
              </div>
              <div className='text-[12px] font-regular font-400 text-[#64748B]'>{props.date}</div>
            </div>
  )
}

export default MessageCard