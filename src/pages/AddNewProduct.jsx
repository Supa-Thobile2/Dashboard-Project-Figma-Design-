import React from 'react'
import { FaTimes } from 'react-icons/fa'

function AddNewProduct() {
  return (
    <div className='flex items-center justify-center h-[100vh] flex-col'>
        <div className='border-[1px] p-4 w-[90%] mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h6>Specification</h6>
                </div>
                <div>
                    <FaTimes/>
                </div>
            </div>
            <form action="" className='p-2'>

                <div className='border p-16 '>
                    <h6>Keyboard Language</h6>
                    <div className=' border-2 flex justify-center justify-between gap-2'>
                        <div className='flex items-center justify-between w-full '>
                        <label htmlFor="backlit " className='text-[12px]'>Blacklit Magic Keyboard - US English</label>
                        <select name="" id="" className='w-full'>
                            <option value="#"></option>
                        </select>
                        </div>

                    </div>
                    <div className='flex items-center justify-between  gap-2'>
                        <div className='w-full flex  flex-col'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                          <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                        
                    </div>
                      <div className='w-full flex items-center justify-between gap-2'>
                        <div className='w-full flex  flex-col'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                          <div className='w-full flex  flex-col gap-2'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                        
                    </div>
                      <div className='flex  w-full gap-2'>
                        <div className='w-full flex  flex-col'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-[100%] mx-auto '>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                          <div className='w-full flex i flex-col gap-2'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                        
                    </div>
                      <div className='w-full flex items-center justify-between w-full gap-2'>
                        <div className='w-full flex items-center flex-col'>
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border w-full'> 
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                          <div className='w-full flex flex-col gap-2'> 
                            <label htmlFor="memory">Memory</label>
                            <select className='p-4 border'>
                                <option value="">8GB unified memory</option>
                            </select>
                          
                        </div>
                        
                    </div>
                    <div className='flex  gap-2 w-full'>
                        <button className='p-[8px] border rounded-[12px] w-full'>Previous</button>
                        <button className='p-[8px] border rounded-[12px] w-full'>Next</button>

                    </div>

                </div>



            </form>

        </div>

    </div>
  )
}

export default AddNewProduct