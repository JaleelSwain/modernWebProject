import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import { Item } from '../Items/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular Consoles</h1>
        <hr />
        <div className="popular-item">
           {[...data_product]
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </div>
    </div>
  )
}

