import React from 'react'

function Card(props) {
  return (
     <div className=" border-[1px] rounded-xl p-4">
          <div className="flex justify-between items-center w-80 mx-auto">
            <h1 className="text-2xl fw-bold">${props.title}</h1>
            <p>${props.img}</p>
          </div>
          <div className="w-[100%] mx-auto my-4 py-4 px-6 border-[1px] rounded-xl bg-gray">
            <h1 className="text-2xl my-2">${props.heading}</h1>
            <div className="flex justify-between items-center pb-2 my-2">
              <p  className="text-base">${props.text}</p>
              <p>${props.numPer}%</p>
            </div>
            <input type="range"  />
            <div className="flex justify-between items-center py-2">
              <div>
                <input type="checkbox" />
                <span>${props.spanText}</span>
              </div>
              <div></div>
            </div>
          </div>
          
        
        </div>
  )
}

export default Card