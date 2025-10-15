import React from 'react'
import { MobileHeader } from '../components'
import { FaBoltLightning } from 'react-icons/fa6'
import { bottomLinks, MenuLinks } from '../data/Data'

function SideBar() {
  return (
    <div className='hidden md:min-h-[100vh] md:flex flex-col border p-6'>

        
             <div className='flex items-center gap-2 '>
            
                       <div className='bg-blue-600 p-2  rounded'>
                      <FaBoltLightning color='white'/>
                    </div>
                    <h4 className='text-[19.2px] font-bold text-[#OF172A]'>Hisponic</h4>
            
            
                  </div>

        

        {/* Menu */}

        <div className='flex-1 pt-10 '>
            <ul className='space-y-8 lg:space-y-10'>

                {MenuLinks.map((item, index)=>{
                    return <li key={index} className='flex items-center gap-2 '>{item.icon}{item.title} </li>
                })}
                
            </ul>
        </div>

        {/* bottom nav */}

        <div className='pt-20 flex-end '>
            <ul className='space-y-4'>

            
            {bottomLinks.map((item, index)=>{
                
               return <li key={index} className='flex items-center gap-2'>{item.icon}{item.title}</li>
                
            })}
            </ul>
            
        </div>

    </div>
  )
}

export default SideBar