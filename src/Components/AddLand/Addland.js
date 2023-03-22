import React from "react";
import "../AddLand/Addland.css"
function Addland() {
  return (
    <div>
     
      <div className="centerDiv">
          <form>
          <label htmlFor="fname">wallet Adress</label>
            <br />
            <input
              className="input"
              type="text"
             
              id="fname"
              Value="0x9be20c33dlkdfjlkaa25fksdkdf"
              disabled
            />
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
             
              id="fname"
              name="Name"
              placeholder="enter your name"
            />
            <br />
            <label htmlFor="fname">email</label>
            <br />
            <input
              className="input"
              type="text"
              
              id="fname"
              name="category"
              placeholder="enter your email"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" 
           
            id="fname" name="Price" />
            <br />
            <label htmlFor="fname">City</label>
            <br />
            <input className="input" type="text" />
          </form>
          <br />
          {/* <img alt="Posts" width="200px" height="200px" src='../assets.auth.svg'></img> */}
          <form>
            <br />
            <input  type="file" />
            <br />
            <button  className="uploadBtn">upload and Submit</button>
          </form>
        </div>

    </div>
  )
}

export default Addland;

