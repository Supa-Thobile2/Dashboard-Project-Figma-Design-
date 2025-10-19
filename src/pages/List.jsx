import React from "react";
import { FaRegShareSquare, FaSearch } from "react-icons/fa";
import { FaArrowDownZA, FaBars, FaBell, FaFilter, FaShare, FaSort, FaUser } from "react-icons/fa6";
import { toDoData } from "../data/Data";
import KanbanOtherCard from "../components/KanbanOtherCard";
import { MobileHeader } from "../components";

function List() {
  return (
    <div className="w-[100%] space-y-2 md:space-y-1 ">
          <div className="sticky inset-0 top-0 w-full mx-auto z-500 bg-white">
                   <div className='flex items-center justify-between p-2'>
            
                   
                   
                    <div>
                      <h3 className='text-[1rem] font-bold '>Overview</h3>
                      <p className="text-[.6rem] font-regular">Detailed Information about your store</p>
                    </div>
                    <div className='hidden md:flex items-center justify-between gap-4 space-x-2'>
                      <div className="border flex items-center  p-[8px] rounded-[0.9rem]">
                        <FaSearch className="text-[12px]"/>
                        <input type="text" name="search" id="search" className="w-full outline-none"/>
            
                      </div>
                      <div className='flex items-center justify-between gap-2'>
                        <div>
                          <FaBell/>
                        </div>
                        <div className=' '>
                          <FaUser className='100%'/>
                        </div>
                        <div>
                          <FaArrowDownZA/>
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden">
                      <FaBars/>
                    </div>
                    </div>
            
                  </div>
    
      <div className="w-[90%] border mx-auto p-4 md:p-2  space-y-4 md:space-y-1">
         {/* filter section */}
        <div className="w-[100%] border mx-auto rounded  p-2 my-2 rounded-2xl  ">

          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2 ">
              <div className="w-[48px] h-[48px] border rounded-[12px] bg-[#F0FDF4] flex items-center justify-center">
                <div className='w-[16px] h-[16px] border rounded-[12px] bg-[#24D164]'></div>
              </div>

              <div className="w-[100%]">
                <h6 className="text-lg font-bold ">Hiphonic App</h6>
                <p className="text-sm text-regular text-[#64748B]">Add Details</p>
              </div>
            </div>
            <div className="  border-[1px] rounded-[12px] border-[#E2E8F0]">
              <button className="flex  items-center justify-center gap-[8px] p-2 text-lg"><FaRegShareSquare />Share</button>
            </div>
          </div>
          
          <div className="flex  items-center p-2">
            icon
          </div>
        </div>


         {/* filter section */}
        
        <div className="py-2 border flex items-center justify-center gap-8 ">
          <div className="flex justify-center items-center gap-2">
            <FaFilter/>
            <p className="text-[14px] font-medium text-[#64748B]">Filter</p>
          </div>
          <div className="flex justify-center items-center gap-2 py-1">
          <FaSort className="h-[14.7px] w-[10px] "/>
            <p className="text-[14px] font-medium text-[#2563EB]">Sort: Date Created</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <button className="border-1 px-6 rounded-[12px] py-2">List</button>
          <button className="border-1 px-6 rounded-[12px] py-2">Board</button>
          <button className="border-1 px-6 rounded-[12px] py-2">Gant</button>
        </div>
      </div>
      <div className='w-[90%] space-y-4 border mx-auto p-4 md:flex justify-center items-center flex-col gap-4'>
      
                  {toDoData.map((item, index)=>{
                      return  <div className="w-full  md:w-[449px] h-[107px] border-1 md:flex items-center justify-between   rounded-[12px] p-2">
             <div>
              <h4 className="text-[16px] font-semibold font-600">{item.heading}</h4>
              <p className="text-[12px] font-medium font-500 text-[#2563EB] ">{item.subTitle}</p>
           
            </div>
               <p className='text-[12px] text-regular font-400'>{item.description}</p>
              <div>
                <div className="flex justify-between items-center">
                  <div>{item.icon}</div>
                  <div>{item.icons}</div>
                </div>
              </div>
            </div>











                  })}
               
                </div>

      
      
    
    </div>
  );
}

export default List;
