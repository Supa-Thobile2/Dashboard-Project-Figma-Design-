import React from 'react'

function BestCard(props) {
  return (
    <div>
        <div className='border-[1px] mx-auto flex items-center justify-between gap-2'>
            <div className='flex items-center justify-center gap-2'>
                <div>{props.image}</div>
                <div>{props.product}</div>
            </div>
            <div>
                <p>...</p>
            </div>
        </div>
        <div className=''>

        
        <table className=' w-[97%] mx-auto border p-6 mb-2'>
            <tr className='border-[1px]'>
                <td className=''>Brand</td>
                <td className='text-right text-[12px] font-semibold '>{props.brand}</td>
                
                
                

               
</tr>
            <tr className='p-4 border-[1px]'>
               <td>Stock</td>
                <td className='text-right text-[12px] font-semibold '>{props.stock}</td>
                

                
            </tr>
            <tr className='border-[1px] p-4'>
                <td>Sales</td>
                <td className='text-right text-[12px] font-semibold '>{props.sales}</td>
                
            </tr>
            <tr>
                <td>Price</td>
                <td className='text-right text-[12px] font-semibold '>{props.price}</td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default BestCard