import React from "react";
import ReactDOM from "react-dom"
import "../public/styles.css"

function Footer(){
  const d =  new Date()
  const year = d.getFullYear();
  
  return(
    <p className="footer">Copyright @ {year} </p>
  )
}

export default Footer;