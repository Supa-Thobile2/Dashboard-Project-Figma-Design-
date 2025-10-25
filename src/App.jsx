import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inbox, Login, Dashboard, ResetPassword, SignUp, VerifyEmail, MainMail, MailPlatform, Chat, NewMessage, JobSearchMain, Kanban, List, Analytics, MainChat, OverView, SearchFilter, JobSearch, MainJobSearch, JobList, MailList, DirectMessage, AddNewProduct, Shipping} from './pages'
import MainOverView from './pages/MainOverView'
import ProductPrice from './pages/ProductPrice'








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
    <Route path='/main' element={<Dashboard/>}/>
    <Route path='/tasks' element={<Kanban/>}/>
    <Route path='/list' element={<List/>}/>

    {/* Sales Analytics section */}
    <Route path='/sales' element={<Analytics/>}/>

    {/* Mail platform */}
    <Route path='/mail' element={<MainMail/>}/>
    <Route path='/message' element={<NewMessage/>}/>
    <Route path='/chat' element={<MainChat/>}/>

    <Route path='/filter' element={<SearchFilter/>}/>
    <Route path='/pop' element={<MailList/>}/>
    <Route path='/direct' element={<DirectMessage/>}/>
     <Route path='/add' element={<AddNewProduct/>}/>
       <Route path='/price' element={<ProductPrice/>}/>
         <Route path='/shipping' element={<Shipping/>}/>



    {/* job section */}
    <Route path='/job' element={<JobSearchMain/>}/>
    <Route path='/overview' element={<MainOverView/>}/>
       <Route path='/search' element={<MainJobSearch/>}/>
       <Route path='/joblist' element={<JobList/>}/>

   
 
    
    
   </Routes>
  
   </BrowserRouter>
  )
}

export default App