import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { MobileHeader } from '../components';
import { FaEnvelope, FaEnvelopeSquare, FaEyeSlash, FaFacebook, FaGoogle, FaGooglePlusG, FaLock, FaRegEnvelope, FaRegEyeSlash, FaRegUser, FaUser, FaUserLock } from 'react-icons/fa';
import { FaBoltLightning } from 'react-icons/fa6';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event)=> setEmail(event.target.value)
  const handlePassword = (event)=> setPassword(event.target.value)

  const handleSubmit = (event)=>{


    event.preventDefault();


    // console.log('Form Data: ', email, password)
    console.log('button pressed')
  }
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
                      <div className='h-50 w-50 rounded-full border-[1px] border-white shadow-lg shadow-[0 0 10px rgba(128, 128, 128, 0.2), 0 0 20px rgba(128, 128, 128, 0.1)] flex justify-center items-center'>Thando, Sandile noZinhle</div>
                    </div>
                   
                     </div>
                      <div className=' text-center py-2 my-4'>
                      <p className='text-[16px] text-white font-bold capitalize'>Welcome to your dashboard</p>
                        <p className='text-[14px] text-white font-regular '>Everything you need to manage your online store</p>

                    </div>
                  </div>
              {/* <div>
                  
              </div> */}
              <div className="w-[100%]  mx-auto flex   flex-col  md:justify-center">
                <MobileHeader className='block md:hidden'/>
                <div className='space-y-0 '>
                
                <div className='w-[90%] space-y-2 mx-auto md:p-19'>
                 <h4 className="text-[22px]  Uppercase font-bold text-[#OF172A] ">
                  Sign In to your account
                </h4>
                <p>Welcome back! please enter your detail</p>
                  <form className="w-[100%] mx-auto  space-y-2" >
                  
                  
                     <div className=" flex items-center justify-centre border-[2px] border-[#E2E8F0] py-[12px] px-[12px] gap-2 my-[4px] rounded-[12px] text-left w-[100%] mx-auto">
                      {/* img */}
                      <FaRegEnvelope className='font-[20px]'/> 
                      <input type="email" placeholder="Email" className='text-[14px] text-regular text-[ #94A3B8] outline-none w-full' onChange={handleEmail} />
                    </div>
      
                    
      
                    <div className="flex items-center justify-center border-[2px] border-[#E2E8F0] py-[12px] px-[4px] gap-2 rounded-[12px] text-left w-[100%] mx-auto">
                      {/* img */}
                      <FaLock    className='font-[20px]'/>
                      <input type="password" placeholder="Password" className='text-[14px] outline-none w-full 'onChange={handlePassword} autoComplete='email'/>
                      {/* img */}
                      <FaRegEyeSlash   className='font-[40px]'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex  justify-center gap-2 py-1'>
                      <input type='checkbox' className='block h-[20px] w-[20px] border-6'/>
                      <p className='text-[14px] font-regular text-[#64748B] '>Remember me</p>
                    </div>
                    <Link to='/resetpassword'><p className='text-[14px] font-regular text-[#64748B]'>Forgot Password</p></Link>

                    </div>
      
      
                    <p className="text-[14px] font-regular text-[#64748B] 
                    ">
                      Your password must have at least 8 characters
                    </p>
                  
                    
                   <Link to='/main'>
                    <button  className="block w-[100%] mx-auto bg-blue-600 rounded-[12px] p-[12px] font-bold text-[16px] text-[#ffffff] mb-4" onChange={handleSubmit}>
                      Sign In
                    </button>
                    </Link>
                     
                    <span className="block text-center font-regular text-[14px] text-[#64748B] ">Or Sign Up with</span>
                    <div className=" md:flex items-center justify-center gap-2">
                      <div className=" ">
                        <button className="flex items-center justify-center gap-[14px] mx-auto rounded-[12px] outline-none p-[8px] border w-[100%] font-semibold text-[14px] text-[#0F172A] font-600">
                          <FaGooglePlusG size={24}/>
                          Google
                        </button>
                      </div>
                      <div className="py-2">
                        <button className=" w-[100%] mx-auto bg-transparent gap-[12px] rounded-[12px] p-[8px] outline-none border   flex items-center justify-center font-semibold text-[14px] text-[#0F172A] font-600">
                         <FaFacebook className='font-[48px]' color='
                         blue' size={24} /> Facebook
                        </button>
                      </div>
                      
                    </div>
              
                  </form>
                </div>
      
                </div>
                                    <p className='text-center text-regular font-400 text-[14px] '>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              </div>

            </div>
          </div>
          
        );
}




export default Login