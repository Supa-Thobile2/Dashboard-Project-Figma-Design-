import React from 'react'

function TransactionCard(props) {
  return (
    <div className=" flex justify-between  items-center border-b-2   gap-2 ">
                <div className='border p-4 rounded-[12px] h-[40px] w-[40px] flex justify-center item-center'>{props.icon}</div>
                <div className="flex flex-col flex-1">
                  <p className='text-[12px] font-semibold  py-2'>{props.heading}</p>
                  <p className='text-[12px] font-medium '>{props.subText}</p>
                </div>
                <div className='text-14px] font-bold'>{props.subPer}</div>
              </div>
              
  )
}

export default TransactionCard