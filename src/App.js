import React from 'react'

import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div>
    <Navbar/>
    </div>
  )
}

export default App



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import LandRegistrationContract from './contracts/LandRegistration.json';

// function App() {

//   const [web3, setWeb3] = useState(null);
//   const [account, setAccount] = useState('');
//   const [contract, setContract] = useState(null);
//   const [landId, setLandId] = useState('');
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [area, setArea] = useState('');
//   const [lands, setLands] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     loadWeb3();
//     loadBlockchainData();
//   }, []);

//   async function loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     }
//     else {
//       setError('Please install MetaMask to use this application.');
//     }
//   }

//   async function loadBlockchainData() {
//     if (!window.ethereum) return;
//     const web3 = window.web3;
//     setWeb3(web3);
//     const accounts = await web3.eth.getAccounts();
//     setAccount(accounts[0]);
//     const networkId = await web3.eth.net.getId();
//     const networkData = LandRegistrationContract.networks[networkId];
//     if (networkData) {
//       const contract = new web3.eth.Contract(LandRegistrationContract.abi, networkData.address);
//       setContract(contract);
//       const landsCount = await contract.methods.getLandsCount().call();
//       const lands = [];
//       for (let i = 1; i <= landsCount; i++) {
//         const land = await contract.methods.getLand(i).call();
//         lands.push(land);
//       }
//       setLands(lands);
//     } else {
//       setError('Smart contract not deployed to detected network.');
//     }
//   }

//   async function registerLand() {
//     await contract.methods.registerLand(landId, name, location, area).send({ from: account });
//     setLands([...lands, { id: landId, name: name, location: location, area: area, owner: account }]);
//     setLandId('');
//     setName('');
//     setLocation('');
//     setArea('');
//   }

//   async function transferOwnership(id, to) {
//     await contract.methods.transferOwnership(id, to).send({ from: account });
//     const updatedLands = lands.map(land => {
//       if (land.id === id) {
//         land.owner = to;
//       }
//       return land;
//     });
//     setLands(updatedLands);
//   }

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {web3 && (
//         <div>
//           <p>Connected account: {account}</p>
//           <h2>Register Land</h2>
//           <form onSubmit={(e) => { e.preventDefault(); registerLand(); }}>
//             <label htmlFor="landId">Land ID:</label>
//             <input type="number" id="landId" value={landId} onChange={(e) => setLandId(e.target.value)} />
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName
// pragma solidity ^0.8.0;

// contract LandRegistration {

//     // Structure to store land details
//     struct Land {
//         uint id;
//         string name;
//         string location;
//         uint area;
//         address owner;
//         bool isRegistered;
//     }
    
//     // Mapping to store land details with land ID as key
//     mapping (uint => Land) public lands;
    
//     // Events to emit when land is registered or ownership is transferred
//     event LandRegistered(uint indexed id, string name, address indexed owner);
//     event OwnershipTransferred(uint indexed id, address indexed from, address indexed to);

//     // Function to register land
//     function registerLand(uint id, string memory name, string memory location, uint area) public {
//         require(!lands[id].isRegistered, "Land is already registered.");
//         lands[id] = Land(id, name, location, area, msg.sender, true);
//         emit LandRegistered(id, name, msg.sender);
//     }
    
//     // Function to transfer ownership of land
//     function transferOwnership(uint id, address to) public {
//         require(lands[id].isRegistered, "Land is not registered.");
//         require(lands[id].owner == msg.sender, "Only the current owner can transfer ownership.");
//         lands[id].owner = to;
//         emit OwnershipTransferred(id, msg.sender, to);
//     }
    
//     // Function to get land details
//     function getLandDetails(uint id) public view returns (string memory, string memory, uint, address) {
//         require(lands[id].isRegistered, "Land is not registered.");
//         return (lands[id].name, lands[id].location, lands[id].area, lands[id].owner);
//     }
// }
