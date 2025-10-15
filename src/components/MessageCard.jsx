import React from 'react'

function MessageCard(props) {
  return (
    <div className="flex justify-between items-center border-t-1 border-b-1 py-2 px-6 mx-auto border-[1px] ">
              <div className="rounded-full border h-[40px] w-[40px] flex justify-center items-center flex-col m-2">
                {props.img}
              </div>
              <div className="p-2 ">
                <h3 className='text-[.82rem] font-bold'>{props.messageHead}</h3>
                <p className='text-[.5rem] pt-1'>
                    {props.subtext}

                </p>
              </div>
              <div>{props.date}</div>
            </div>
  )
}

export default MessageCard