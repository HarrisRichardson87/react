import React from 'react'
import './App.css';

const userInput = (props) => {
  return  (
    <div className="card">  
          <p>Entre su nombre!</p>
          <input type="text" onChange={props.change} value={props.currentName}/>
         
    </div>
  )}

export default userInput;