// This component now gets data from ShopContext and handles both image field names.

import React, { useContext } from 'react';
import './Popular.css';
import { Item } from '../Items/Item';
import { ShopContext } from '../../Context/ShopContext';

export const Popular = () => {
    const { all_products } = useContext(ShopContext);
    const popularConsoles = all_products.filter(item => item.category === 'Console').slice(0, 4);

    return (
        <div className='popular'>
            <h1>Popular Consoles</h1>
            <hr />
            <div className="popular-item">
                {popularConsoles.map((item, i) => {
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
