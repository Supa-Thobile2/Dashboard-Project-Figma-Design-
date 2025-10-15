import React from 'react'

function TaskCard(props) {
  return (
     
          
          
         
          <div className="w-[343px] h-[128px] mx-auto flex justify-between items-center p-4  my-4 border rounded-xl">
            <div>
              <input type="checkbox" />
              <span>${props.para}</span>
            </div>
            <div className="text-right">
              <div className="flex justify-between items-center">
                <p>${props.titleText}</p>
                <p>...</p>
              </div>
             ${props.icon}
            </div>
          </div>

         
        
       
  )
}

export default TaskCard