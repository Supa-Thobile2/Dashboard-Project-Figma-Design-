import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inbox, Login, Main, ResetPassword, SignUp, VerifyEmail, MainMail, MailPlatform, Chat, NewMessage, JobSearchMain} from './pages'








function App() {


  return (
   <BrowserRouter>
   <Routes>
    {/* Sign Up and Login routes */}
    <Route index element={<Login />}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verify' element={<VerifyEmail/>}/>

    {/* Main Section sales */}
    <Route path='/main' element={<Main/>}/>

    {/* Mail platform */}
    <Route path='/mail' element={<MainMail/>}/>
    <Route path='/imbox' element={<MailPlatform/>}/>
    <Route path='/newmessage' element={<NewMessage/>}/>
    <Route path='/chat' element={<Chat/>}/>


    {/* job section */}
    <Route path='/job' element={<JobSearchMain/>}/>
 
    
    
   </Routes>
  
   </BrowserRouter>
  )
}

export default App