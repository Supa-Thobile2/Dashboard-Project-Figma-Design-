import React from 'react'
import { Link } from 'react-router-dom'
import { MobileHeader } from '../components';
import { FaEnvelope, FaEnvelopeSquare, FaEyeSlash, FaFacebook, FaGoogle, FaGooglePlusG, FaLock, FaRegEnvelope, FaRegEyeSlash, FaRegUser, FaUser, FaUserLock } from 'react-icons/fa';
import { FaBoltLightning, FaBridgeLock, FaShopLock } from 'react-icons/fa6';



function SignUp() {
       return (
       
        
       <div className='w-[100%] h-[100%]  '>
        
         <div className="flex justify-center w-[100%] h-[100vh] ">
        <div className="hidden md:block bg-blue-600 w-[100%] p-6  ">
                  <div className='flex items-center gap-2'>
                 
                            <div className='bg-white p-2  rounded'>
                           <FaBoltLightning color='blue'/>
                         </div>
                         <h4 className='text-[19.2px] font-bold text-[#fff] md:text-[27.72px]'>Hisponic</h4>
                 
                 
                       </div>
                 <div className='flex justify-center items-center flex-col h-[65vh]'>
       
                
                 <div className=' h-80 w-80 rounded-full border-[1px] border-white shadow-lg shadow-[0 0 10px rgba(128, 128, 128, 0.2), 0 0 20px rgba(128, 128, 128, 0.1)] flex justify-center items-center'>
                   <div className=' h-50 w-50 rounded-full border-[1px] border-white shadow-lg shadow-[0 0 10px rgba(128, 128, 128, 0.2), 0 0 20px rgba(128, 128, 128, 0.1)] flex justify-center items-center'>Image</div>
                 </div>
                
                  </div>
                   <div className=' text-center py-2 my-4'>
                   <h3 className='text-[16px] text-white font-bold capitalize md:text-[24px]'>Welcome to your dashboard</h3>
                   <p  className='text-[12px] text-white font-regular md:text-[14px] '>Everything you need to manage your online store</p>
                 </div>
               </div>
           {/* <div>
               
           </div> */}
           <div className="w-[100%] flex   flex-col  md:justify-center md:p-14">
             <MobileHeader className=''/>
             <div className='p-2 space-y-2'>
             
             <div className='w-[90%] mx-auto md:px-6 py-2'>
              <h3 className="text-[22px]  Uppercase font-bold text-[#OF172A]md:text-[24px]">
               Sign Up to your account
             </h3>
             <p className='text-[16px] py-2 font-400 font-regular text-[#64748B]'>Welcome back! please enter your detail</p>
             
               <form className="w-[100%] mx-auto space-y-2 md:space-y-3 ">
                <div className="flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2  rounded-[12px] text-left w-[100%] mx-auto">
                   {/* img */}
                   <FaRegUser className='font-[24px] outline-none'/>
                   <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' />
                 </div>
               
                  <div className="flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2  rounded-[12px] text-left w-[100%] mx-auto">
                   {/* img */}
                   <FaRegEnvelope className='font-[24px]'/>
                   <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' />
                 </div>
   
                 
   
                 <div className="flex items-center justify-center border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2 rounded-[12px] text-left w-[100%] mx-auto">
                   {/* img */}
                   <FaLock    className='font-[24px]'/>
                   <input type="password" placeholder="Password" className='text-[14px] outline-none w-full '/>
                   {/* img */}
                   <FaRegEyeSlash   className='font-[44px]'/>
                 </div>
   
   
                 <p className="text-[.94rem] font-regular text-[#64748B] 
                 ">
                   Your password must have at least 8 characters
                 </p>
                 <div className='flex  justify-center gap-2 py-2'>
                   <input type='checkbox' className='block h-[20px] w-[20px] border-6'/>
                   <p className='text-[.9rem] md:text-[1.2rem] font-regular text-[#64748B] '>By creating an account you agree to our <span className='font-semibold font-600  md:text-[.8rem]'><strong>Terms & Conditions</strong></span> and our <span className='font-semibold font-600 '><strong>Privacy Policy</strong></span></p>
                 </div>
   
                 <button className="block w-[100%] mx-auto bg-blue-600 rounded-[12px] p-[10px] font-bold text-[16px] text-[#ffffff]">
                   Sign In
                 </button>
                 <span className="block text-center font-regular text-[12px] text-[#64748B] py-2">Or Sign Up with</span>
                 <div className=" space-y-1 md:flex items-center justify-center gap-4 ">
                   <div className=" border-[1px] border-[#E2E8F0] outline-none ">
                     <button className="flex items-center justify-center gap-[12px] mx-auto rounded-[12px] outline-none p-[10px] border w-[100%] font-semibold text-[14px] text-[#0F172A] font-600">
                       <FaGooglePlusG  className='font-[24px]'/>
                       Google
                     </button>
                   </div>
                   <div className=" border-[1px] border-[#E2E8F0] outline-none">
                     <button className=" w-[100%] mx-auto bg-transparent gap-[12px] rounded-[12px] p-[10px] outline-none border   flex items-center justify-center font-semibold text-[14px] text-[#0F172A] font-600">
                      <FaFacebook className='font-[24px]' color='
                      blue' /> Facebook
                     </button>
                   </div>
                   
                 </div>
           
               </form>
             </div>
   
             </div>
                  <p className='text-center font-regular font-400 text-[14px] '>Already have an account?<span className='ml-2 text-blue-500 text-[14px] font-bold font-700'><Link to='/'>Log In</Link></span></p>
           </div>
         </div>
       </div>
       
     );
}




export default SignUp