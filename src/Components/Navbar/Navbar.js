import React from 'react'
// import './Navbar.css'
import logo from '../../assets/icons8-male-user-50.png'
function Navbar() {
  return (
    <div className="absolute bg-031022 w-screen flex justify-between items-center">
      <a href="#home">
        <img
          src={logo}
          alt="landfi"
          width="70px"
          height="70px"
          className="ml-5 md:ml-20 py-2"
        ></img>
      </a>
      <div className="flex justify-end items-center">
        <div className="max-h-14 mr-4 block md:hidden">
          <button className='px-3 py-1 text-lg rounded-md bg-slate-600 text-white border-2
        hover:bg-opacity-0 hover:text-orange-primary transition duration-300 ease-in-ou'>Sell</button>
        </div>
        <div className="max-h-14 mr-4 hidden md:block">
        <button className='px-6 py-2 text-xl rounded-md bg-slate-600 text-white border-2
        hover:bg-opacity-0 hover:text-orange-primary transition duration-300 ease-in-ou'>
        Sell
        </button>
        </div>
        <div className="max-h-14 mr-5 block md:hidden">
        <button className='px-3 py-1 text-xl rounded-md bg-opacity-0 text-black border-2 boarder-slate-500
          hover:text-purple-500 hover:border-black transition duration-300 ease-in-out'>Sign Up</button>
        </div>
        <div className="max-h-14  hidden md:block">
        <button className='px-6 py-2 text-xl rounded-md bg-opacity-0 text-black border-2 border-slate-500
          hover:text-orange-400 hover:border-black transition duration-300 ease-in-out'>Sign Up</button>
        </div>
        <div className="max-h-14 ">
          <img className='px-3 py-1 rounded-full ' src={logo} alt="profile" />
        </div>
      </div>
    </div>
    
  )
}

export default Navbar;