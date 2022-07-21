import React from "react";
import { useState } from "react";
import './Home.css'
const Home=()=>{
  const [donation,setdonation]=useState(true);

  return(
    <>
    
    <div className="home-container">
      <div className="donation-page" style={{display : donation?"":"none"}}>
        <h1>GIVE A HAND YOUR CONTRIBUTION MEANS A LOT</h1>
        <p className="donation-page-btn-para">
        <button className='donation-btn' onClick={()=>{setdonation(!donation)}}>Donate</button>
        </p>
      </div>
      
      <div className="payment-page" style={{display : donation?"none":""}}>
        <h1>Donating is a privilege which very less people have</h1>
        <p className="payment-page-btn-para">
        <button className='back-btn' onClick={()=>{setdonation(!donation)}}>Back</button>
        <a href=' https://amit5785.github.io/payment-razorpay/' className='payment-btn'  target="_self" >Pay</a>
        </p>
      </div>
      
    </div>
    </>
  );
}

export default Home;