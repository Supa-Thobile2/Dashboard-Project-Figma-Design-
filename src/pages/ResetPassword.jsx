import React from "react";
import { MobileHeader } from "../components";
import { Link } from "react-router-dom";

function ResetPassword() {
   return (
    <div className="w-[100%]h-[100vh] mx-auto flex   md:justify-center">



      
      

      <div className="w-[100%] h-[100vh] flex items-center  flex-col">

      
      <MobileHeader />

      <div classname='flex items-center justify-center '>

      
      <div className="py-2 ">
        <div className=" flex  flex-col mx-auto space-y-8 p-6 md:p-19">
          <h4 className="text-[22px]  Uppercase font-bold text-[#OF172A] ">
            Verify your email
          </h4>
          <p>Welcome back! please enter your detail</p>
          <form className="w-[100%] mx-auto space-y-2 md:space-y-3 ">
                 
                   
                             <div className=" border-[1px] border-[#E2E8F0] outline-none">
                               <button className=" w-[100%] mx-auto bg-transparent gap-[12px] rounded-[12px] p-[10px] outline-none border   flex items-center justify-center font-semibold text-[14px] text-[#0F172A] font-600">
                             Skip Now
                               </button>
                             </div>
                             
                           
                     
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

export default ResetPassword;
