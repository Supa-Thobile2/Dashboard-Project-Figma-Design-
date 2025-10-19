import React from "react";
import { doneData, inProgress, inReviewData, recentProjectsData, toDoData } from "../data/Data";
import { ImageCard, KanbanCard, MobileHeader, SalesCard } from "../components";
import KanbanHead from "../components/KanbanHead";
import KanbanOtherCard from "../components/KanbanOtherCard";
import { FaArrowDownZA, FaBars, FaBell, FaFilter, FaSort, FaUser } from "react-icons/fa6";
import { FaRegShareSquare, FaSearch } from "react-icons/fa";



function Kanban() {
  return (
    <div className='p-4'>
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
      
      <div className="md:flex  justify-between p-4">
        <div className="p-2">
         
          <div className="block w-full border-1 p-2 md:p-0 space-y-4 md:space-y-0 md:flex flex-col gap-2">

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
        {/* section */}
        <div className="md:lex items-center justify-center gap-2">
       
          <div className="block border-1 md:flex-items-center justify-center gap-2 gap-2">

            {inProgress.map((item, index)=>{
                return <KanbanCard
                key={index}
                heading={item.heading}
                subText={item.subText}
                icon={item.icon}
                icon2={item.icon2}
                para={item?.para}
                img={item.img}
                
                />
            })}
         
          </div>
        </div>


{/* Automated goals */}
         <div className="">
        
          <div className="block border-1 space-y-4 md:space-y-0 p-2 md:flex-items-center justify-center gap-2">

            {inReviewData.map((item, index)=>{
                return <KanbanCard
                key={index}
                img={item.img}
                heading={item.heading}
                icon={item.icon}
                icon2={item.icon2}
                subText={item.subText}
                para={item.para}
                
                
                />
            })}
         
          </div>
        </div>

{/* Done section */}
        <div className="">
        
          <div className='block border-1 md:flex-items-center justify-center gap-2'>

            {doneData.map((item, index)=>{
              return <KanbanCard
              key={index}
              heading={item.heading}
              subText={item.subText}
              icon={item.icon}
              icon2={item.icon2}
              para={item.para}
              className='font-49px'
              />
            })}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
