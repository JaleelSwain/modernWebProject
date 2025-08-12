import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    // Initialize an empty cart. It will be populated as users add items.
    let cart = {};
    return cart;
}

const ShopContextProvider = (props) => {
    // State to hold products fetched from the backend
    // FIX: Renamed to all_products to match what other components expect.
    const [all_products, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // useEffect to fetch products from the API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                // FIX: Use the correct setter function.
                setAllProducts(response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []); // The empty dependency array ensures this runs only once

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // FIX: Find the item info from the corrected state variable 'all_products'.
                // Note: Your backend might use `_id` (string) while your old assets used `id` (number). This find handles both.
                let itemInfo = all_products.find((product) => product._id === item || product.id === Number(item))
                if (itemInfo) {
                    // Make sure to use the correct price field from your backend model (e.g., 'price')
                    totalAmount += itemInfo.price * cartItems[item]
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    // Function to clear the cart after checkout
    const clearCart = () => {
        setCartItems(getDefaultCart());
    }

    // FIX: Updated contextValue to provide the correctly named 'all_products' state and clearCart function.
    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart, clearCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
