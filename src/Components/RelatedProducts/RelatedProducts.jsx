import React from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import { allItems } from '../CategorySection/Category'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {allItems.slice(0,4).map((item,i)=> {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.price} old_price={item.old_priceprice}/>

        })}

      </div>
    </div>
  )
}

export default RelatedProducts
