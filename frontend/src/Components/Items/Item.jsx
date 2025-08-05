import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
      <img className="item-image" src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
          {props.price}
        </div>
       
      </div>
    </div>
  )
}

