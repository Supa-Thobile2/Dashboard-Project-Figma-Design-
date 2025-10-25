import React, { useState } from "react";
import { AnalyticsCard, MobileHeader, SalesCard} from "../components";
import { analyticsData, bestSellData, overViewData, productsData, transactionHistoryData } from "../data/Data";
import BestCard from "../components/BestCard";
import TransactionCard from "../components/TransactionCard";
import SideBar from "../components/SideBar";
import RecentProjects from "./RecentProjects";
import { FaSearch } from "react-icons/fa";
import { FaArrowDownZA, FaBars, FaBell, FaEllipsis, FaRegCalendar, FaUser } from "react-icons/fa6";
import Analytics from "./Analytics";
import Kanban from "./Kanban";
import KanbanAdd from "./KanbanAdd";
import MailPlatform from "./MailPlatform";
import List from "./List";
import Goals from "./Goals";
import Gant from "./Gant"; 
import OverView from "./OverView";


function Dashboard() {
  
const [isVisible, setIsVisible] = useState(false)

const handleVisibility = ()=>{
  return setIsVisible(!isVisible)
}


  return (
    <div className="  min-h-[100vh] flex bg-primary-600">
    {/* Sidebar section */}
    {isVisible ?  <div className="  md:w-1/6 min-h-[100vh] xl:w-1/6 ">
     <SideBar/> 
      
    </div> :''}
   
    {/* Right section of Main */}
    <div className='w-[100%]  mx-auto md:w-5/6  min-h-[100vh] '>
    {/* navbar section */}
      <div className="sticky inset-0 top-0 w-full mx-auto z-500 bg-white">
       <div className='flex items-center justify-between p-2'>

       
       
        <div>
          <h3 className='text-[1rem] font-bold '>Overview</h3>
          <p className="text-[.6rem] font-regular">Detailed Information about your store</p>
          {/* <button onClick={handleVisibility}></button> */}
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
          <FaBars onClick={handleVisibility}/>
        </div>
        </div>

      </div>
      <div className="w-[90%] p-4 border-6 mx-auto"> 
             <RecentProjects/> 
      </div>



    
    </div>

    </div>
  );
}

export default Dashboard
