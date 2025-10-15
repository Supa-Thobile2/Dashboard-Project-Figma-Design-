import React from 'react'

function KanbanOtherCard(props) {
  return (
    <div className="w-full  border-1   rounded-[12px] p-2">
              <h4 className="text-[.9remrem] font-semibold py-1">{props.heading}</h4>
              <p className="text-[.6rem] font-medium  ">{props.subTitle}</p>
              <p className='text-[.5rem]'>{props.description}</p>
            
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