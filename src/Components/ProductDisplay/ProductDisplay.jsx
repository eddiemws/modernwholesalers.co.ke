import React, { useContext } from 'react';
import './ProductDisplay.css';
// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Context';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    
    <div className='productdisplay'>

      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      



      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
        <a href="https://wa.me/254715412841" target="_blank" rel="noopener noreferrer">
        <img 
            src="https://i.postimg.cc/6p1LGq0t/whats-app-order.gif" 
            alt="Order on WhatsApp" 
            className="whatsapp-image"
          />
          </a>
          
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Sh.{product.price}</div>
          <div className="productdisplay-right-price-new">Sh.{product.price}</div>
        </div>
        <div className="productdisplay-right-description">
          {/* A lightweight, usually knitted pullover shirt, close-fitting and with a round neckline and short sleeves worn as an undershirt or outer garment  */}
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        
        
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern , Latest,</p>
      </div>
    </div>
  )
}

export default ProductDisplay
