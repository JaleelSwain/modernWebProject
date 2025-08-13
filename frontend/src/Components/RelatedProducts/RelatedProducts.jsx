// This component now gets data from ShopContext.

import React, { useContext } from "react";
import "./RelatedProducts.css";
import { Item } from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";

export const RelatedProducts = () => {
    const { all_products } = useContext(ShopContext);
    const relatedItems = [...all_products].sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div className="relatedproduct">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedItems.map((item, i) => {
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