import React from 'react'


const dummyData = (props) => {
return(
      <div className="card">
        <p>Nombre de Usar : {props.name}</p>
        <p>Origin de Usar: {props.country}</p>
      </div>
  )
}
export default dummyData;