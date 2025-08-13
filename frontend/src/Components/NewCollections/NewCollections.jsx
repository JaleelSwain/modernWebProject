// This component now gets data from ShopContext.

import React, { useContext } from 'react';
import './NewCollections.css';
import { Item } from '../Items/Item';
import { ShopContext } from '../../Context/ShopContext';

export const NewCollections = () => {
    const { all_products } = useContext(ShopContext);
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
                            image={item.imageUrl} // Pass the URL path
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};
