import React from 'react'

function ListCard(props) {
  return (
      <div className="w-[100%] mx-auto rounded border p-4 my-2 rounded-2xl">

          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2 ">
              <div className="w-20 h-20 border rounded-3xl"></div>
              <div className="w-[100%] flex-1">
                <h1 className="text-[1.2rem] font-bold pb-2">{props.title}</h1>
                <p className="text-[.8rem]">{props.subTitle}</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[100%] flex-1">
              <button>{props.btnText}</button>
            </div>
          </div>
          
          <div className="flex  items-center p-2">
            {props.icon}
          </div>
        </div>
  )
}

export default ListCard