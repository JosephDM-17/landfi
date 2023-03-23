import React from 'react'
import Navigation from '../Navbar/Navbar'
import house from '../../assets/house.jpg'
import Card from '../card/card';

function Landingpage() {
  return (
    <div>
      <Navigation/>
     
 
 
    <div className="card-container">
      <Card 
        imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
        title="2.5 eth"
        subtitle="ernakulam"
      />
    <Card 
        imageSrc={house}
        title="2.5 eth"
        subtitle="ernakulam"
      />
      <Card 
        imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
        title="2.5 eth"
        subtitle="ernakulam"
      />
    <Card 
        imageSrc={house}
        title="2.5 eth"
        subtitle="ernakulam"
      />
    </div>

    
 


      
    </div>
  )
}

export default Landingpage