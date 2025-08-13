import React, { useContext } from 'react'
import './CSS/ProductCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import {Item} from '../Components/Items/Item'

export const ProductCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='product-category'>
      <div className="shopcategory-indexSort">
<<<<<<< HEAD
        <p>
          {/* This can be updated later to be dynamic */}
          <span>Showing 1-12</span> out of {all_products.filter(item => item.category === props.category).length} products
        </p>
=======
>>>>>>> 8e31fc3bb8785f630ac67997ca1484ad2321c610
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if (props.category===item.category){
              // FIX: Pass the MongoDB '_id' to the Item component.
              // The Item component will use this to create the correct link.
              return <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ProductCategory
