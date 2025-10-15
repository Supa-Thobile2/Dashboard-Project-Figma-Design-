import React from 'react'

function KanbanCard(props) {
  return (
    <div className=" mx-auto  w-full  p border-[.7rem] border-[#F1F5F9] bg-[#fff] rounded-[1.2rem]">
      {props.img ?  <div className='border p-4 md:p-2  rounded-xl'>
                {props.img}

             </div>: null}
          
              <div className='p-2 space-y-4 md:space-y-0'>
              <h4 className="text-[1rem] font-bold font-900 text-[#0F172A] font-bold px-2">{props.heading}</h4>
              <p className="text-[.6rem] font-medium px-2 ">{props.subText}</p>
              <p className="border-b-1 px-2  text-[.6rem] font-regular font-400 text-[#64748B]">
                {props.para}
              </p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className='pill bg-blue-200'>{props.icons}</div>
                </div>
              </div>
            </div>
  )
}

export default KanbanCard