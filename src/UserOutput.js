import React from 'react';
import './App.css';

const userOutput = (props) => {
return    (
      <div className="card">
        <p>Nombre de Usar:{props.name}</p>
        <p>Origin de Usar:{props.country}</p>
      </div>
  )
}
export default userOutput;