import React from 'react'
import { MobileHeader } from '../components'
import { FaAngleDown, FaEllipsis, FaEyeLowVision, FaLink, FaPlus } from 'react-icons/fa6'

function KanbanAdd() {
  return (
    <div className=" p-4 border-8   mx-auto backdrop-blur">

        <div className='bg-white border-[1px] rounded-[12px] p-2'>
            <div className='flex items-center justify-between '>
                <div className='p-[.2rem]'>
                    <h3 className='text-[1.2rem] font'>Space > Hiphonic</h3>
                </div>
                <div className='flex items-center justify-between gap-2 p-[.2rem]'>
                    <div className='text-[.7rem]'><FaEllipsis/></div>
                    <div className='text-[.7rem]'><FaPlus/></div>
                </div>
                
            </div>
            <div className='flex items-center gap-4'>
                    <div className=''>
                        <FaEyeLowVision/>
                    </div>
                    <div className=''>
                        <FaLink/>
                    </div>
                </div>
                <div className='flex items-center justify-center p-1'>
                    <input type="text" name="todo" id="toDo" placeholder='Write a task name' className='w-full outline-none' />
                   
                    <select name="" id="">
                        <option value='ToDo'>To Do</option>
                    </select>
                </div>
                <div className='border p-2'>
                     <div className='flex items-center justify-between'>
                <div className='p-1'>
                    <h3 className='text-xl font-semibold font-400'>Details</h3>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <div><FaAngleDown/></div>
                    
                </div>
                
            </div>
            <div className='grid grid-cols-2  justify-items-center'>
                <div>
                    <div>Assigned To</div>
                    <div>No assignee</div>
                </div>
                <div>
                    <div>Date Created</div>
                    <div>No assignee</div>

                </div>
                <div>
                    <div>Labels</div>
                    <div>Development</div>
                </div>
                <div>
                    <div>Date Created</div>
                    <div>No due date</div>

                </div>
            </div>
            <div className='p-2'>
                <h4 className='text-xl'>Description</h4>
                <p>Add more details to this task</p>
                <div className='flex items-center gap-4'>
                    <p>SubTask</p>
                    <FaPlus/>
                </div>
                <h5>Activity</h5>
                <div className='flex items-center gap-4 py-2'>
                    <div className='h-10 w-10 rounded-full border flex items-center justify-center'>image</div>
                    <div className='border-[1px] w-full rounded-[12px] p-[8px]'><input type="text" name="comment" id="comment" placeholder='Add a comment' className='w-full outline-none'/></div>
                </div>
                <p className='text-center'>Pro tip: press <span>M to comment</span></p>
            </div>

            


                </div>


        </div>



    </div>
  )
}

export default KanbanAdd