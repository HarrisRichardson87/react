import React from 'react'
import './App.css';
const countryInput = (props) => {
  
  return  (
    <div className="card">  
          <p>Pais de origin!</p>
         <input type="text" onChange={props.change} value={props.currentCountry}/>
    </div>
  )}

export default countryInput;