import React from "react";
import ReactDOM from "react-dom"
import "../public/styles.css"

function Note(){
  return (
    <div>
      <h1 className="h1">This is Note Title</h1>
      <p className="note">
        This is Note Content.
      </p>
    </div>
  )
}