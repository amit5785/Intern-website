import React from "react";
import './Contact.css'
const Contact=()=>{
  return (
    <>
      <div>
      <form>      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="email" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form> 
      </div>
    </>
  );
}

export default Contact