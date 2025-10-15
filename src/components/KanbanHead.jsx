import React from 'react'

function KanbanHead(props) {
  return (
             <div className="w-[100%] flex justify-between items-center ">

            <div>
                <h6 className="text-[16px] font-regular">{props.title}</h6>
            </div>
            <div className="flex justify-between items-center">
              <div className='border py-6 px-4'>Icon</div>
              <div>Icon</div>
            </div>


          </div>
  )
}

export default KanbanHead