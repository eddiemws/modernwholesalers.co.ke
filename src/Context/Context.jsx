import React, { createContext, useState, useEffect } from "react";
import { allItems } from "../Components/Assets/all_items.jsx"; // ✅ Use allItems
import '../Components/CategorySection/Category.jsx'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let item of allItems) {
        cart[item.id] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        // ✅ Load from localStorage, fallback to default cart
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        return savedCart || getDefaultCart();
    });

    // ✅ Save cart to localStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevents negative values
        }));
    };

    // ✅ **Fixed Total Calculation**
    const getTotalCartAmount = () => {
        return allItems.reduce((total, item) => {
            return total + item.price * (cartItems[item.id] || 0);
        }, 0);
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
