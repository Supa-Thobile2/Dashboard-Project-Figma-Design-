import React from 'react'

function KanbanOtherCard(props) {
  return (
    <div className="w-full  md:w-[264px] h-[201px] border-1   rounded-[12px] p-2">
              <h4 className="text-[16px] font-semibold font-600">{props.heading}</h4>
              <p className="text-[12px] font-medium font-500 text-[#2563EB] ">{props.subTitle}</p>
              <p className='text-[12px] text-regular font-400'>{props.description}</p>
            
              <div>
                <div className="flex justify-between items-center">
                  <div>{props.icon}</div>
                  <div>{props.icons}</div>
                </div>
              </div>
            </div>
  )
}

export default KanbanOtherCard