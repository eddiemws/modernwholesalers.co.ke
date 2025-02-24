import React from 'react'
// import Hero from '../Components/Hero/Hero'

// import Item from '../Components/Item/Item'
// import Popular from '../Components/Popular/Popular.jsx'
// import Offers from '../Components/Offers/Offers.jsx'
import NewCollections from '../Components/NewCollections/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'
import CategoryBannerSection from '../Components/CategorySection/Category.jsx'

const Shop = () => {
  return (
    <div>
      <CategoryBannerSection/>
      {/* <Hero/> */}
      {/* <Popular/>
      <Offers/> */}
      <NewCollections/>
      <NewsLetter/> 
      
    </div>
  )
}

export default Shop

