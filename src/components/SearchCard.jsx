import React from 'react'

function SearchCard(props) {
  return (
    <div className='w-[100%] mx-auto md:w-[600px] flex items-center justify-between border p-2 rounded-[12px]'>
        
        <div className=''>ico</div>

<div className='flex items-center justify-evenly  '>
        <div className='  flex item-center justify-center'>image</div>
        <div className='space-y-2'>
            <h3 className='text-md font-bold'>{props.title}</h3>
            <p className='text-sm font-regular'>{props.subTitle}</p>
            <div>
              <span>{props.span1}</span>
              <span>{props.span2}</span>
              
              
              </div>
        </div>
        </div>



        <div className=''>

          <button className='py-2 px-4 bg-blue-600 border-0 rounded-[12px]'>{props.btnText}</button>
        </div>
    </div>
  )
}

export default SearchCard