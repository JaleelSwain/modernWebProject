// This component now gets data from ShopContext and handles both image field names.

import React, { useContext } from 'react';
import './NewCollections.css';
import { Item } from '../Items/Item';
import { ShopContext } from '../../Context/ShopContext';

export const NewCollections = () => {
    const { all_products } = useContext(ShopContext);

    // Get the 8 most recently added products by sorting by creation date
    const newItems = [...all_products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 8);

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {newItems.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item._id}
                            name={item.name}
                            // FIX: Pass the correct image path, checking for both possible field names
                            image={item.imageUrl || item.image} 
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};
