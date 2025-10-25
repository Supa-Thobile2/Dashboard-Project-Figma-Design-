import React, { useState } from 'react'
import { FaCross } from 'react-icons/fa6'


function SearchFilter() {

  const [from, setFrom] =useState('')
  const [to, setTo] =useState('')
  const [keyword, setKeyword] =useState('')
  const [browse, setBrowse] =useState('')
  const [custom, setCustom] =useState('')

const handleFrom =(e)=>{
  e.preventDefault()
     setFrom(e.target.value)
  console.log(from)

}
const handleTo =(e)=>{
  e.preventDefault()
    setTo(e.target.value)
  console.log(to)
  
}
const handleKeyword =(e)=>{
  e.preventDefault()
     setKeyword(e.target.value)
  console.log(keyword)
  
}
const handleBrowse =(e)=>{
  e.preventDefault()
     setBrowse(e.target.value)
  console.log(browse)
  
}

const handleCustomdate =(e)=>{
  e.preventDefault()
   setCustom(e.target.value)
  console.log(browse)
  
}

const handleSearch = (e)=>{
  e.preventDefault()
  console.log('search button has been clicked')
}
const handleFilter = (e)=>{
    e.preventDefault()
  console.log('filter button has been clicked')
}

  return (
    <div className='flex items-center justify-center h-[100vh] w-[100%]'>
    <div className='w-[80%] mx-auto border rounded-xl space-y-2 p-2 md:p-8'>
        <div className='flex items-center justify-between'>
            <div className='flex justify-between items-center gap-4'>
                <h5 className='text-md font-bold'>Search Email</h5>
               
            </div>
            <div>
               <FaCross/>
            </div>
        </div>
        <div className=' w-[100%] mx-auto p-2'>
          <form className='w-[100%] mx-auto space-y-1'>
            <div className='w-full p-2'>
              <label className='text-md font-bold'>Browse</label>
              <div className='flex items-center justify-between  border rounded-sm w-full'>
                <div>All Media</div>
                <div><FaCross/></div>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>From</label>
              <div className='flex items-center justify-between p-[8px]'>
               <input type='text' placeholder='Darrel Steward' onChange={handleFrom} className='border rounded-sm w-full p-[8px]'/>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>To</label>
              <div className='flex items-center justify-between py-1'>
                <input type='email' placeholder='Email, come separated' onChange={handleTo}  className='border rounded-sm w-full p-[8px]'/>
              </div>
            </div>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>Keyword</label>
              <div className='flex items-center justify-between py-1'>
                <input type='text' placeholder='Try Meeting' onChange={handleKeyword} className='border p-[8px] rounded-sm w-full'/>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
            <div className='w-full p-1'>
              <label className='text-md font-bold '>Browse</label>
              <div className='flex items-center justify-between py-1'>
                <input type='text' placeholder='1 Month' onChange={handleBrowse} className='border p-[8px] rounded-sm w-full'/>
              </div>
            </div>
            <div className='w-full p-1 '>
              <label className='text-md font-bold '>Custom Date</label>
              <div className='flex items-center justify-between py-1'>
                <div className='flex items-center justify-between w-full'>
              <input type='text' placeholder='dd/mm/yy' onChange={handleCustomdate} className='border p-[8px] rounded-sm w-full'/>
              </div>
              </div>
            </div>
            </div>
            <div className='flex items-center  justify-center space-y-1 gap-2'>
              <button onClick={handleFilter} className='border rounded-sm w-full p-[8px]   rounded-[12px]'>Search</button>
              <button onClick={handleSearch} className='border rounded-sm w-full p-[8px]  rounded-[12px]'>Create Filters</button>
            </div>
          </form>

        </div>

    </div>
    </div>
  )
}

export default SearchFilter