import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import { Item } from '../Items/Item'

export const NewCollections = () => {
  return (
    <div className="newcollection">
        <h1>New Games</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description}/>
            })}
        </div>
    </div>
  )
}
