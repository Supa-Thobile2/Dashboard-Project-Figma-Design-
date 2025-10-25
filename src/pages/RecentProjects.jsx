import React from "react";
import { MessageData, recentProjectsData, TaskData, TaskSummary } from "../data/Data";
import MessageCard from "../components/MessageCard";
import TaskCard from "../components/TaskCard";
import TaskObject from "../components/TaskObject";
import { MobileHeader } from "../components";
import Message from "./Message";

function RecentProjects() {
  return (
    <div className="min-w-full min-h-full flex  flex-col  bg-[#F8FAFC]">

 
      
  
        {/* recent section leading section */}
        <div className="w-full border-[1px] rounded-xl  mx-auto  bg-white">
        {/* leading head section */}
          <div className="flex  items-center  mx-auto mb-8">
            <h5 className="text-md font-bold  ">Recent Project</h5>
            <p>...</p>
          </div>

          {/* recent section cards */}
          <div className="block md:flex items-center justify-between  mx-auto">



          {recentProjectsData.map((item, index)=>{
console.log(item)

                   return <div key={index} className="w-full p-2 mx-auto  bg-[#F8FAFC]  border-[1px] rounded-xl bg-gray">
            <h4 className="text-[16px] font-bold ">{item.title}</h4>
            <div className="flex justify-between items-center ">
              <p  className="text-[12px] font-regular font-400 text-[ #64748B]
">{item.text}</p>
              <p className='text-[12px] text-semibold'>{item.numPer}</p>
            </div>
            <input type="range" />
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" />
                <span className="text-[12px] font-medium font-medium ">{item.spanText}</span>
              </div>
              <div>{item.image}</div>
            </div>
          </div>

          


          })}

                    </div>

         
          
        </div>



        {/* <div className=" my-4 border-4 rounded-xl mx-auto ">
          <div className="flex justify-between items-center p-4">
            <p   className="text-[16px] font-bold ">Activity</p>
            <div>
              
              <select className="text-[12px] font-medium text-primary-600"> 
                <option value='Weekly'>Weekly</option>
                <option value="English" >English</option>
                <option value="Xhosa" >Xhosa</option>
                <option value="Afrikaans" >Afrikaans</option>
              </select>
            </div>
          </div>
          <div className="border-2 p-8 my-6">Graph</div>
        </div> */}

        {/* <div className=" border rounded-xl mx-auto">
          <div className="flex justify-between items-center ">
            <p className="font-bold">Task Summary</p>

            <p>...</p>
          </div>
          <div className="w-full mx-auto border-8  block md:flex justify-center items-center">
            <div className="grid grid-cols-3 md:grid-cols-2">
              {TaskSummary.map((item, index)=>{
                return <TaskObject 
                key={index}
                title={item.title}
                image={item.image}
                value={item.value}
                
                />
              })}
            </div>

            <div>
            <p className="py-2">On-time completion rate</p>
            <div className="flex justify-between items-center">
              <div className="flex justify-evenly items-center ">
                <div className="p-4">
                  <p>96.25%</p>
                </div>
                <div>
                  <p>Graph</p>
                </div>
              </div>
            </div>
            </div>


          </div>
        </div> */}

<div className='block md:flex '>


        <div className="w-full border mx-auto rounded-xl">
          <div className="flex justify-center items-center">
            <div>November 21</div>
            <div>Arrows</div>
          </div>
          <div className="border"></div>
        </div>


        {/* Message section */}
        <div className="w-full mx-auto m border  mx-auto rounded-xl">
          <h5 className="text-[16px]  font-bold">Message</h5>
          <div className="py-2 text-center mx-auto">
            <Message/>
            {/* {MessageData.map((item,index)=>{
              console.log(item)

                return <MessageCard
                img={item.img}
                messageHead={item.messageHead}
                subTex={item.subtext}
                date={item.date}
                key={index}
                />
            //     <div key={index} className="flex justify-between items-center border-t-1 border-b-1 py-1">
            //   <div className="rounded-full border h-20 w-20 flex justify-center items-center flex-col">{item.img}</div>
            //   <div className="p-4 flex-1 text-left">
            //     <h3>{item.messageHead} </h3>
            //     <p className='text-[8px]'>{item.subtext}

            //     </p>
            //   </div>
            //   <div>{item.date}</div>
            // </div>
            })} */}
           
            
            <button className="font-bold pt-6"> See More</button>
          </div>
        </div>

      </div>

 {/* task section */}
        
        <div className="w-full mt-4 border mx-auto rounded-xl">
          {/* sectionhead */}
          <div className="flex justify-between items-center">
            <div>
              <p>Task (10)</p>
            </div>
            <div className="flex justify-center items-center">
              <p>See All</p>
              <p>Arrow</p>
            </div>
          </div>

          {/* task card */}
         {TaskData.map((item, index)=>{
              return <TaskCard 
              key={index}
              para={item.para}
              title={item.title}
              icon={item.icon}

              />

         })}
        </div>
       
      </div>
    
  );
}

export default RecentProjects;
