import React from 'react'
import {Routes,Route } from "react-router-dom";

import Start from './Pages/Start';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import AddLand from './Pages/AddLand';
import LandingPage from './Pages/LandingPage';
import ViewPost from './Pages/ViewPost';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/addland' element={<AddLand/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/viewpost' element={<ViewPost/>}/>
      </Routes>
      
   </div>
  )
}

export default App;