import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/Context';
import remove_icon from '../Assets/cart_cross_icon.png';
import { allItems } from '../../Components/CategorySection/Category'; // ✅ Import allItems

const CartItems = () => {
    const { getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allItems.map((e) => {  // ✅ Use allItems instead of all_product
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>Sh.{e.price}</p> {/* ✅ Use price instead of new_price */}
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Sh.{e.price * cartItems[e.id]}</p> {/* ✅ Use price */}
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Sh.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Sh.{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
