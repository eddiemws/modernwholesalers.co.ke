import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an outline platform that facilitates buying and selling of products or services over the internet to showcase their products, interact with customers and conduct transactions without the need for a physical presence. E-commerce websites have gained imense popularity due to their convinience, accessibility, and the global reach they offer.</p>
        <p>
           E-commerce typically display products or services as detaailed description, images nad prices and any available variance.(e.g., sizes colors). Each product usually has its own dedicated with relevant infornmation. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
