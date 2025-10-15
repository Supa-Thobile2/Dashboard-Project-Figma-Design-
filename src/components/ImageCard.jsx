import React from 'react'

function ImageCard(props) {
  return (
   <div className=" mx-auto border p-4 my-6 rounded-xl">
    
              <div>
                <div className="flex justify-between items-center">
                  <div>{props.icon}</div>
                  <div>{props.icons}</div>
                </div>
              </div>
            </div>
  )
}

export default ImageCard