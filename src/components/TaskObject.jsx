import React from 'react'

function TaskObject(props) {
  return (
    <div className=" w-[93px] h-[128px] mx-auto border rounded-2xl  py-2 px-4 flex justify-center items-center flex-col">
                <div className="h-10 w-10 rounded-full border m-6 ">{props.image}</div>
                <p className="text-2xl ">{props.title}</p>
                <p className="text-base pb-6">{props.value}</p>
              </div>
  )
}

export default TaskObject