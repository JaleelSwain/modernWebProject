import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/all_products";
import { Item } from "../Items/Item";

export const RelatedProducts = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
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
  );
};
