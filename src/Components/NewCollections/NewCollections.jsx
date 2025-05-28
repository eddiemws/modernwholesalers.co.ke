import './NewCollections.css'
// import '../CategorySection/Category'

import React from 'react'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import { allItems } from '../Assets/all_items'
import '../CategorySection/Category.jsx'


const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {allItems.slice(0,4).map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.price} old_price={item.old_price} />
        })}

      </div>
    </div>
  )
}

export default NewCollections
