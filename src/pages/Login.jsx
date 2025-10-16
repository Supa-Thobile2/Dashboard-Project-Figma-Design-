import React from 'react'
import { Link } from 'react-router-dom'
import { MobileHeader } from '../components';
import { FaEnvelope, FaEnvelopeSquare, FaEyeSlash, FaFacebook, FaGoogle, FaGooglePlusG, FaLock, FaRegEnvelope, FaRegEyeSlash, FaRegUser, FaUser, FaUserLock } from 'react-icons/fa';
import { FaBoltLightning } from 'react-icons/fa6';


function Login() {
    return (
          
           
          <div className='w-[100%] h-[100%] '>
           
            <div className="flex justify-center w-[100%] h-[100vh] ">
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
              {/* <div>
                  
              </div> */}
              <div className="w-[95%]  mx-auto flex   flex-col  md:justify-center">
                <MobileHeader className='block md:hidden'/>
                <div className='py-2  '>
                
                <div className='w-[95%] mx-auto p-2 md:p-19'>
                 <h4 className="text-[18px]  Uppercase font-bold text-[#OF172A] ">
                  Sign In to your account
                </h4>
                <p>Welcome back! please enter your detail</p>
                  <form className="w-[100%] mx-auto  ">
                  
                  
                     <div className="flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2 my-[12px] rounded-[12px] text-left w-[100%] mx-auto">
                      {/* img */}
                      <FaRegEnvelope className='font-[20px]'/>
                      <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' />
                    </div>
      
                    
      
                    <div className="flex items-center justify-center border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2 rounded-[12px] text-left w-[100%] mx-auto">
                      {/* img */}
                      <FaLock    className='font-[20px]'/>
                      <input type="password" placeholder="Password" className='text-[14px] outline-none w-full '/>
                      {/* img */}
                      <FaRegEyeSlash   className='font-[40px]'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex  justify-center gap-2 py-1'>
                      <input type='checkbox' className='block h-[20px] w-[20px] border-6'/>
                      <p className='text-[12px] font-regular text-[#64748B] '>Remember me</p>
                    </div>
                    <Link to='/resetpassword'>Forgot Password</Link>

                    </div>
      
      
                    <p className="text-[8px] font-regular text-[#64748B] 
                    ">
                      Your password must have at least 8 characters
                    </p>
                  
                    <Link to='/main'>
                   
                    <button className="block w-[100%] mx-auto bg-blue-600 rounded-[12px] p-[8px] font-bold text-[16px] text-[#ffffff]">
                      Sign In
                    </button>
                     </Link>
                    <span className="block text-center font-regular text-[8px] text-[#64748B] py-1">Or Sign Up with</span>
                    <div className="py-1 md:flex items-center justify-center gap-2">
                      <div className="py-1 border-[1px] border-[#E2E8F0] outline-none ">
                        <button className="flex items-center justify-center gap-[12px] mx-auto rounded-[12px] outline-none p-[8px] border w-[100%] font-semibold text-[14px] text-[#0F172A] font-600">
                          <FaGooglePlusG  className='font-[24px]'/>
                          Google
                        </button>
                      </div>
                      <div className="py-1 border-[1px] border-[#E2E8F0] outline-none">
                        <button className=" w-[100%] mx-auto bg-transparent gap-[12px] rounded-[12px] p-[8px] outline-none border   flex items-center justify-center font-semibold text-[14px] text-[#0F172A] font-600">
                         <FaFacebook className='font-[24px]' color='
                         blue' /> Facebook
                        </button>
                      </div>
                      
                    </div>
              
                  </form>
                </div>
      
                </div>
                                    <p className='text-center text-regular font-400 text-[12px] '>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              </div>

            </div>
          </div>
          
        );
}




export default Login