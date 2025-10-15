import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inbox, Login, Main, ResetPassword, SignUp, VerifyEmail } from './pages'
import MainMail from './pages/MainMail'







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
    <Route path='/mail' element={<MainMail/>}/>

    <Route path='/inbox' element={<Inbox/>}/>
    
   </Routes>
  
   </BrowserRouter>
  )
}

export default App