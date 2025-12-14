import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/Context';
import remove_icon from '../Assets/cart_cross_icon.png';
import { allItems } from '../../Components/CategorySection/Category.jsx'; // ✅ Import allItems
import '../../Components/Assets/all_items.jsx';

// ===== TEST WHATSAPP NUMBER =====
const WHATSAPP_TEST_NUMBER = "254715412841";

// ===== HELPER TO FORMAT CURRENCY =====
const formatKES = (amount) => `Sh.${Number(amount).toLocaleString()}`;

const CartItems = () => {
    const { getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

    // ===== Build array of only selected items (qty > 0) =====
    const selectedItems = allItems
        .map((item) => {
            const qty = cartItems[item.id] || 0;
            return qty > 0 ? { ...item, qty } : null;
        })
        .filter(Boolean);

    // ===== Build WhatsApp message text =====
    const buildWhatsAppMessage = () => {
        if (!selectedItems.length) return null;

        const lines = [
            "Hello 👋, I want to place an order from your site:",
            "",
            ...selectedItems.map(
                (itm) =>
                    `• ${itm.name} — Qty: ${itm.qty} — ${formatKES(itm.price)} each — Subtotal: ${formatKES(
                        itm.price * itm.qty
                    )}`
            ),
            "",
            `Total items: ${selectedItems.reduce((sum, i) => sum + i.qty, 0)}`,
            `Total amount: ${formatKES(getTotalCartAmount())}`,
            "",
            `Delivery address: `,
            `Name: `,
            `Phone: `,
            `Notes (size, color, etc): `,
        ];

        return lines.join("\n");
    };

    // ===== Open WhatsApp with prefilled cart message =====
    const openWhatsAppWithCart = () => {
        const message = buildWhatsAppMessage();
        if (!message) {
            alert("Your cart is empty — add some items first.");
            return;
        }

        const phone = WHATSAPP_TEST_NUMBER.replace(/\D/g, ""); // remove any non-digits
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        window.open(waUrl, "_blank");
    };

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
            {allItems.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>{formatKES(e.price)}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{formatKES(e.price * cartItems[e.id])}</p>
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
                            <p>{formatKES(getTotalCartAmount())}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{formatKES(getTotalCartAmount())}</h3>
                        </div>
                    </div>

                    {/* ===== REPLACED CHECKOUT BUTTON ===== */}
                    <button
                        onClick={openWhatsAppWithCart}
                        style={{
                            backgroundColor: "#25D366",
                            color: "#fff",
                            padding: "10px 16px",
                            borderRadius: 6,
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginTop: "12px",
                        }}
                    >
                        Buy on WhatsApp
                    </button>
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
};

export default CartItems;
