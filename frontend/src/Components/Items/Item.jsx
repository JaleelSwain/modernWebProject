import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className="item-image" src={props.image} alt="" /></Link>
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

