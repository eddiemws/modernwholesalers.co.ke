import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/Context'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item.jsx';



const ShopCategory = (props) => {
  const {all_product: all_products} = useContext(ShopContext);
  
  return (
   
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-12
          </span>
          out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_products.map((item, i) => {
         
          if (props.category.trim().toLowerCase() === item.category.trim().toLowerCase())  {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  )
}

export default ShopCategory
