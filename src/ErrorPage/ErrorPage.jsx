import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css'
const ErrorPage=()=>{
  return (<>
    <div className="Error-page-container">
      <h1>No Such Page Exits :)</h1>
      <Link to='/'  >Refresh</Link>
    </div>
  </>);
}

export default ErrorPage;