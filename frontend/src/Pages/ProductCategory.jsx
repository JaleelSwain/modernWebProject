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
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if (props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
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