// This component displays a single product item. The fix is to construct the
// full URL to the image on the backend server.

import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  // This handles cases where the image field might be named 'image' or 'imageUrl'
  const imageUrl = props.image || props.imageUrl;

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        {/* FIX: Prepend the backend server address to the image URL */}
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          className="item-image" 
          src={`http://localhost:5001${imageUrl}`} 
          alt={props.name} 
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.price}
        </div>
      </div>
    </div>
  );
};