import React from 'react'

import './style.css'

interface props{
  color:string
}


export const Card = (props:props) => {
  return (
    <div
    style={{background:props.color}}
    className='cardContainer'
    >
      <div className="dataCard">
        <p>item</p>
        <h1>hours</h1>
      </div>
    </div>
  )
}
