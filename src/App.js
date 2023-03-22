import React from 'react'
import {Routes,Route } from "react-router-dom";

import Start from './Pages/Start';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import AddLand from './Pages/AddLand';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/addland' element={<AddLand/>}/>
      </Routes>
      
   </div>
  )
}

export default App;