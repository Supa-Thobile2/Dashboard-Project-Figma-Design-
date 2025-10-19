import React from 'react'
import { analyticsData } from '../data/Data'
import { MobileHeader } from '../components'
import AnalyticsCard from '../components/AnalyticsCard'
import { FaArrowDownZA, FaBars, FaBell, FaUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

function Analytics() {
  return (
    <div className=' w-full  p-4'>
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

     
        <div className=' p-2 mx-auto space-y-1 md:flex   flex-col gap-2 '>
          <h3 className='font-bold text-[18px]'>Analytics</h3>
          <div className='flex items-center justify-between'>
            <p>#1 Dec -31 DEC</p>
            <button className=' rounded-[12px]  bg-[#2563EB]'>Export</button>
          </div>
          <p className='font-regular text-[8px] text-[#64748B]'>Monitor progress regularly to increase sales</p>
        <div className='grid md:grid-cols-2  gap-2  '>
        {analyticsData.map((item, index)=>{

          return <AnalyticsCard 
              header={item.header}
              amount={item.amount}
              per={item.per}

          />

            // return <div className='border py-2 px-4 my-4'>
            //     <h4>{item.header}</h4>
            //     <div className='flex items-center gap-2'>
            //         <div>{item.amount}K</div>
            //         <div>{item.per}%</div>
            //     </div>
            // </div>

        })}
        </div>
        </div>
        <div className=''>
          <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-[16px] font-bold font-700 text-[#0F172A]'>Performance</h6>
            </div>
            <div className='text-[12px] text-semibold font-600 text-[#64748B]'>
              <select name="" id="">
                <option value="impressions">impressions</option>
              </select>
            </div>
          </div>

        </div>
        <div className='block md:flex items-center justify-between'>
         <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-[16px] font-bold font-700 text-[#0F172A]'>Email Activity</h6>
            </div>
            <div className='text-[12px] text-semibold font-600 text-[#64748B]'>
              <select name="" id="">
                <option value="impressions">impressions</option>
              </select>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-[16px] font-bold font-700 text-[#0F172A]'>Audience Insights</h6>
            </div>
            <div className='text-[12px] text-semibold font-600 text-[#64748B]'>
              <select name="" id="">
                <option value="impressions">impressions</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div>
             <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-[16px] font-bold font-700 text-[#0F172A]'>Sales Location</h6>
            </div>
            <div className='text-[12px] text-semibold font-600 text-[#64748B]'>
              <select name="" id="">
                <option value="impressions">impressions</option>
              </select>
            </div>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Analytics