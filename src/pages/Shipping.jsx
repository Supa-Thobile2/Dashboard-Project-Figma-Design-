import React from 'react'

function Shipping() {
  return (
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
  )
}

export default Shipping