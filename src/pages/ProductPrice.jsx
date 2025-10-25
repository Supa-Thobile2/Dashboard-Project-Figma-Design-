import React from 'react'
import { FaTimes } from 'react-icons/fa'

function ProductPrice() {
  return (
    <div className='p-8 border-2 w-full flex flex-col   h-[100vh] ' >

        <div className='p-4 border-8 h-100 '>
            <div className='flex items-center justify-between p-4'>
                <div>
                    <h6>Pricing</h6>
                </div>
                <div>
                    <FaTimes/>
                </div>
            </div>
            <div className='p-2 border rounded-[12px]'>
                <h6>Tax excluded price </h6>
                <p>$12459
                </p>
            </div>
             <div className='p-2 border rounded-[12px]'>
                <h6>Tax included price </h6>
                <p>$49
                </p>
            </div>
               <div className='p-2 border rounded-[12px]'>
                <h6>US Tax Rule </h6>
                <p>Us Tax (4%)
                </p>
            </div>
            <div className=''>
                <div>
                    <label htmlFor="price">Unit Price</label>
                    <p>Unit Price</p>
                </div>
                <div>
                    <label htmlFor="minimum">Minimum Order</label>
                    <select>
                        <option value="select">Please Select</option>

                    </select>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button className='p-[8px] rounded-[12px] '>Previous </button>
               <button className='p-[8px] rounded-[12px] '>Next </button>
            </div>

        </div>

    </div>
  )
}

export default ProductPrice