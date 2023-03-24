import React, {useState} from "react"
import { Link } from "react-router-dom"
import { ethers } from 'ethers'
import logo from "../../assets/icons8-male-user-50.png"
import "./Navbar.css"


const Navigation = () => {
    const [ account, setAccount ] = useState('')
    const connectHandler = async () => {
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const account = accounts[0]
        // setAccount(account);
        if (typeof window !="undefined" && typeof window.ethereum !="undefined"){
              try{
                const accounts=await window.ethereum.request({method: "eth_requestAccounts"});
                setAccount(accounts[0]);
                // console.log(walletAddress);
        
              }catch(err){
                console.log(err.message);
              }
            }else{
              console.log("Please install MetaMask");
            }
    }

    


    return(
        <nav>
            <ul className='nav__links'>
                <li><a href="/landing">Buy</a></li>
                <li> <Link to='/addland'>Register Land</Link></li>
            </ul>

            <div className='nav__brand'>
                <img src={logo} alt="Logo" />
                <h1>Landfi</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    )
    

}


export default Navigation;