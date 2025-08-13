// This component shows the detailed view of a single product. The fix is to
// construct the full URL for the main product image.

import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    // This handles cases where the image field might be named 'image' or 'imageUrl'
    const imageUrl = product.image || product.imageUrl;

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    {/* FIX: Prepend the backend server address to the image URL */}
                    <img 
                      className='productdisplay-main-img' 
                      src={`http://localhost:5001${imageUrl}`} 
                      alt={product.name} 
                    />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {/* These images should be in your frontend/src/Components/Assets folder */}
                    <img src={require('../Assets/star_icon.png')} alt="" />
                    <img src={require('../Assets/star_icon.png')} alt="" />
                    <img src={require('../Assets/star_icon.png')} alt="" />
                    <img src={require('../Assets/star_icon.png')} alt="" />
                    <img src={require('../Assets/star_dull_icon.png')} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price">${product.price}</div>
                </div>
                <div className="productdisplay-right-description">{product.description}</div>
                <button onClick={() => { addToCart(product._id) }}>ADD TO CART</button>
            </div>
        </div>
    );
};