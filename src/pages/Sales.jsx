import React from 'react'
import { overViewData } from '../data/Data'
import SalesCard from '../components/SalesCard'
import { FaBell, FaRegClock, FaSearch, FaUser } from 'react-icons/fa'


function Sales() {
  return (
    <div className='flex justify-center  h-[100vh]'>
        <div className='hidden md:flex flex-col '>
            <div className='p-2'>logo</div>
            <div className='flex  flex-col flex-1 '>
               
                <div className='p-4'>
                <ul>
                    <li>Overview</li>
                    <li>Analytics</li>
                    <li>Orders</li>
                    <li>Products</li>
                    <li>Customers</li>
                </ul>
            </div>
            

            </div>
            <div className='flex-end'>
                <ul>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>
            
        </div>
        <div className=' flex-1'>
            <div className='flex items-center justify-between'>
                <div>
                    <p>Overview</p>
                    <span className='text-base'>Detailed information about your store</span>
                </div>
                <div className=' flex items-center justify-center gap-2'>
                    {/* icon */}
                    <FaSearch/>
                    <input type="text" placeholder='Search' />
                    <div>
                        <FaBell/>
                    </div>
                    <div className='flex items-center justify-center border rounded-full w-10 h-10'>
                        <FaUser/>
                        
                    </div>
                    
                </div>

            </div>
            <div className='flex-1'>
                <div className=''>
                    <div className='block md:flex justify-between items-center p-4 '>
                        {/* <div className='border rounded p-4 my-4 flex justify-evenly items-center gap-2'>
                            <div className='flex justify-center items-center  w-10 h-10 p-2 bg-blue-200 border rounded-full'>
                                <FaShoppingCart/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Monthly sales</p>
                                <p className='text-[8px]'>$1234.00</p>
                            </div>
                            <div><p className='text-[8px]'>+12.4%</p></div>
                        </div>
                     <div className='border rounded p-4 my-4 flex justify-evenly items-center gap-2'>
                            <div className=' w-10 h-10 p-2 bg-blue-200 border rounded-full  flex justify-center items-center'>
                                <FaDollarSign/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Total Revenue</p>
                                <p className='text-[8px]'>$10,566.01</p>
                            </div>
                            <div><p className='text-[8px]'>+35%</p></div>
                        </div>
                        <div className='border rounded p-4 my-4 flex justify-evenly items-center gap-2'>
                            <div className=' w-10 h-10 p-2 bg-blue-200 border rounded-full  flex justify-center items-center'>
                                <FaRegClock/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Returns</p>
                                <p className='text-[8px]'>$956.00</p>
                            </div>
                            <div><p className='text-[8px]'>-5%</p></div>
                        </div>
                       <div className='border rounded p-4 my-4 flex justify-evenly items-center gap-2'>
                            <div className=' w-10 h-10 p-2 bg-blue-200 border rounded-full  flex justify-center items-center'>
                                <FaMoneyBill/>
                            </div>
                            <div>
                                <p className='text-[8px]'>AD spend</p>
                                <p className='text-[8px]'>$5566.01</p>
                            </div>
                            <div><p className='text-[8px]'>+15%</p></div>
                        </div> */}

                        {overViewData.map((item, index)=>{
                            <SalesCard id={item.id} icon={item.icon} heading={item.heading} subText={item.subText} subPer={item.subPer} />
                        })}

                    </div>
                 

                </div>
                <div>

                
                <div className='block md:grid grid-cols-2 border gap-2'>
                    <div className='border rounded '>
                        
                        <div className='border flex justify-between items-center'>
                         <p>Overall Revenue</p>
                            <div>
                                <label>This Year</label>
                            </div>

                        </div>
                           <p>%</p>
                    </div>
                    <div  className='border rounded'>
                        
                        <div className='flex justify-between items-center'>
                            <p>Overall Revenue</p>
                            <div>
                                <label>This Year</label>
                            </div>

                        </div>
                         <p>%</p>
                    </div>
                </div>
                 <div className='block md:grid grid-cols-2 border gap-2'>
                    <div className='border rounded'>
                        
                        <div className='flex justify-between items-center'>
                         <p>Overall Reven</p>
                            <div>
                                <label>This Year</label>
                            </div>

                        </div>
                           <div className='flex items-center justify-center '>
                            <table className='border-2'>
                                <thead className='border'>
                                    <tr className='border-4'>
                                    <th>Brand</th>
                                    <th>Stock</th>
                                    <th>Stock</th>
                                    <th>Sales</th>
                                    <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Watch Nike Series 7</td>
                                        <td>Apple</td>
                                        <td>100</td>
                                        <td>1234</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td>Watch Nike Series 7</td>
                                        <td>Apple</td>
                                        <td>100</td>
                                        <td>1234</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td>Watch Nike Series 7</td>
                                        <td>Apple</td>
                                        <td>100</td>
                                        <td>1234</td>
                                        <td>$399.00</td>
                                    </tr>
                                </tbody>
                            </table>
                           </div>
                    </div>
                    <div  className='border rounded p-1'>
                        <div className='border flex justify-between items-center'>
                         <p>Overall Revenue</p>
                            <div>
                                <label>This Year</label>
                            </div>

                        </div>

                        <div className='border rounded p-2 flex justify-evenly items-center gap-2'>
                           <div className='flex'>

                         
                            <div className=''>
                                <FaRegClock/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Returns</p>
                                <p className='text-[8px]'>Amount</p>
                            </div>
                              </div>
                            <div><p className='text-[8px]'>%</p></div>
                        </div>
                        <div className='border rounded p-2 flex justify-evenly items-center gap-2'>
                           <div className='flex'>

                         
                            <div className=''>
                                <FaRegClock/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Returns</p>
                                <p className='text-[8px]'>Amount</p>
                            </div>
                              </div>
                            <div><p className='text-[8px]'>%</p></div>
                        </div>
                        <div className='border rounded p-2 flex justify-evenly items-center gap-2'>
                           <div className='flex'>

                         
                            <div className=''>
                                <FaRegClock/>
                            </div>
                            <div>
                                <p className='text-[8px]'>Returns</p>
                                <p className='text-[8px]'>Amount</p>
                            </div>
                              </div>
                            <div><p className='text-[8px]'>%</p></div>
                        </div>
                       
                    </div>
                </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default Sales