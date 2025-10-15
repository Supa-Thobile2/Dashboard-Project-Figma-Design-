import React from 'react'

function SalesCard(props) {
  return (
    <div className=' border rounded-[12px] flex justify-center items-center gap-4 mx-auto p-2' >
                                <div className='flex justify-center items-center  w-[24px] h-[24px] text-[1rem] bg-blue-200 border rounded-[12px]'>
                                    {props.icon}
                                </div>
                                <div className='flex-1'>
                                    <p className='text-[12px] font-medium text-[#64748B] '>{props.heading}</p>
                                    <h5 className='text-[18px] font-bold'>{props.subText}K</h5>
                                </div>
                                <div className=''><p className='text-[.9rem]'>+${props.subPer}%</p></div>
                            </div>
  )
}

export default SalesCard