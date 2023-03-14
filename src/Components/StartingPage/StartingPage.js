import React from "react";

import "./StartingPage.css";
import {useNavigate,Link} from 'react-router-dom'
function StartingPage() {
  // const history=useNavigate()
  return (
    <div className="bg_container">
      <div className="box_container">
        <h1 classname="text-white">Hello Welcome to Decentralized </h1>
        <br />
        <h1 classname="text-white">Land Registration</h1>
        <br />
        <Link to='/signup'>
        <button
         
          className="
        px-6 py-2 text-xl rounded-md bg-slate-600 text-white border-2 w-48
        hover:bg-opacity-0 hover:text-white-primary transition duration-300 ease-in-ou"
        >
          Signup
        </button>
        </Link>
        <br />
        <Link to='/login'>
        <button
        
          className="px-6 py-2 mt-3 text-xl rounded-md bg-slate-600 text-white border-2 w-48
        hover:bg-opacity-0 hover:text-white-primary transition duration-300 ease-in-ou"
        >
          Login
        </button>
        </Link>
      </div>
    </div>
  );
}

export default StartingPage;
