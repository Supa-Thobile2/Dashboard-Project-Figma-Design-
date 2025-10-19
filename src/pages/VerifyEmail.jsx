import React, { useState } from "react";
import { MobileHeader } from "../components";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBoltLightning } from 'react-icons/fa6';


function VerifyEmail() {
  const [email, setEmail] = useState('')
  const handleEmail = (e)=> setEmail(e.target.value);
  const handleSubmit = (e) => console.log('button clicked')
    return (
    <div className="w-[100%]h-[100vh] mx-auto flex   md:justify-center">

        <div className="hidden md:block bg-blue-600 w-[100%]  p-4">
                           <div className='flex items-center gap-2'>
                          
                                     <div className='bg-white p-2  rounded'>
                                    <FaBoltLightning color='blue'/>
                                  </div>
                                  <h4 className='text-[19.2px] font-bold text-[#fff]'>Hisponic</h4>
                          
                          
                                </div>
                          <div className='flex justify-center items-center flex-col h-[90%] md:h-[80%] lg:h-[80%] '>
                
                         
                          <div className='h-80 w-80 rounded-full border-[1px] border-white shadow-lg shadow-[0 0 10px rgba(128, 128, 128, 0.2), 0 0 20px rgba(128, 128, 128, 0.1)] flex justify-center items-center'>
                            <div className='h-50 w-50 rounded-full border-[1px] border-white shadow-lg shadow-[0 0 10px rgba(128, 128, 128, 0.2), 0 0 20px rgba(128, 128, 128, 0.1)] flex justify-center items-center'>Image</div>
                          </div>
                         
                           </div>
                            <div className=' text-center py-2 my-4'>
                            <p className='text-[16px] text-white font-bold capitalize'>Welcome to your dashboard</p>
                              <p className='text-[14px] text-white font-regular '>Everything you need to manage your online store</p>
      
                          </div>
                        </div>


      
      

      <div className="w-[100%] h-[100vh] flex items-center  flex-col">

      
      <MobileHeader />

      <div classname='flex items-center justify-center '>

      
      <div className="py-2 ">
        <div className=" flex  flex-col mx-auto space-y-8 p-6 md:p-19">
          <h4 className="text-[22px]  Uppercase font-bold text-[#OF172A] ">
            Verify your email
          </h4>
          <p>Welcome back! please enter your detail</p>
          <form className="w-[100%] mx-auto space-y-8  ">
           
                      
                               {/* img */}
                          
                           
                              <div className="flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2  rounded-[12px] text-left w-[100%] mx-auto">
                               {/* img */}
                               <FaRegEnvelope className='font-[24px]'/>
                               <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' onChange={handleEmail}/>
                             </div>
               
                             
               
                           
               
               
                             <p className="text-[14px] font-regular text-[#64748B] 
                             ">
                               Your password must have at least 8 characters
                             </p>
                            
                       
                         
            <p
              className="text-[8px] font-regular text-[#64748B] 
                        "
            >
              Your password must have at least 8 characters
            </p>

            <Link to="resetpassword" >
              <button onChange={handleSubmit} type='submit' className="block w-[100%] mx-auto bg-blue-600 rounded-[12px] p-[8px] font-bold text-[16px] text-[#ffffff]">
                Skip  Now
              </button>
            </Link>
          
          </form>
        </div>
      </div>
      <p className="text-center text-regular font-400 text-[14px] ">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      </div>
    </div>
    </div>
  );
}

export default VerifyEmail;
