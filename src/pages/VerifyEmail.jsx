import React from "react";
import { MobileHeader } from "../components";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";


function VerifyEmail() {
    return (
    <div className="w-[100%]  mx-auto flex   flex-col  md:justify-center">
      <MobileHeader />
      <div className="py-2 ">
        <div className="md:w-[65%] mx-auto text-center flex justify-center items-center flex-col mx-auto space-y-8 p-6 md:p-19">
          <h4 className="text-[22px]  Uppercase font-bold text-[#OF172A] ">
            Verify your email
          </h4>
          <p>Welcome back! please enter your detail</p>
          <form className="w-[100%] mx-auto space-y-8  ">
           
                      
                               {/* img */}
                          
                           
                              <div className="flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2  rounded-[12px] text-left w-[100%] mx-auto">
                               {/* img */}
                               <FaRegEnvelope className='font-[24px]'/>
                               <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' />
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

            <Link to="/verify">
              <button className="block w-[100%] mx-auto bg-blue-600 rounded-[12px] p-[8px] font-bold text-[16px] text-[#ffffff]">
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
  );
}

export default VerifyEmail;
