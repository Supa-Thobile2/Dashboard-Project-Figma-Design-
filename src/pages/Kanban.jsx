import React from "react";
import { doneData, inProgress, inReviewData, recentProjectsData, toDoData } from "../data/Data";
import { ImageCard, KanbanCard, MobileHeader, SalesCard } from "../components";
import KanbanHead from "../components/KanbanHead";
import KanbanOtherCard from "../components/KanbanOtherCard";



function Kanban() {
  return (
    <div>
      
      <div className="border-1 space-y-4 md:space-y-2 mx-auto p-0">
        <div className="p-2">
         
          <div className="block w-full border-1 p-2 md:p-0 space-y-4 md:space-y-0 md:flex gap-2">

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
        <div className="">
       
          <div className="block border-1  md:flex gap-2">

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
        
          <div className="block border-1 space-y-4 md:space-y-0 p-2 md:flex">

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
        
          <div className='block border-1 md:flex'>

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
