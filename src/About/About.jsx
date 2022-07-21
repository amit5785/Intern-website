import React from "react";
import './About.css'
const About=()=>{
  return(
    <>
      <div className="about-page-container">
        <h2>Detail of the task :</h2>
        <h4>Task No :- <span>#3</span></h4>
        <h4>Name of the Task :- <span>Payment Gateway Integeration</span></h4>
        <h4>Domain :- <span>Web Development</span></h4>
        <p>There is a simple Donate button on home page,on clicking the donate button, the user will land on the payment page where user can select the amount to be paid & the payment type e.g Credit-Card, Paypal etc.</p>
        <p>Once the payment is done, invoice will be generated and sent to the user for Sucessful transection.The invoice will cotain the amount.</p>


      </div>
    </>
  );
}

export default About;