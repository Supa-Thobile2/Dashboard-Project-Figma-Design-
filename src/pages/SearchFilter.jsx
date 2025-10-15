import React from 'react'
import { FaCross } from 'react-icons/fa6'

function SearchFilter() {
  return (
    <div className='p-4'>
        <div className='flex items-center justify-between'>
            <div className='flex justify-between items-center'>
                <h5>Search Email</h5>
                <FaCross/>
            </div>
            <div></div>
        </div>

    </div>
  )
}

export default SearchFilter