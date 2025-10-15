import React from "react";
import { FaRegShareSquare } from "react-icons/fa";
import { FaFilter, FaShare, FaSort } from "react-icons/fa6";
import { toDoData } from "../data/Data";
import KanbanOtherCard from "../components/KanbanOtherCard";
import { MobileHeader } from "../components";

function List() {
  return (
    <div className="w-[100%] space-y-2 md:space-y-1 ">
    
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
      <div className='w-[90%] space-y-4 border mx-auto p-4 md:flex justify-center items-center gap-4'>
      
                  {toDoData.map((item, index)=>{
                      return <KanbanOtherCard
                      key={index}
                      heading={item.heading}
                      subTitle={item.subTitle}
                      description={item.description}
                      
                      
                      
                      />
                  })}
               
                </div>

      
      
    
    </div>
  );
}

export default List;
