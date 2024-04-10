import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export default function StoreContextProvider(props) {
    const [cartItems, setCartItems] = useState({});
    const [cartLength, setCartLength] = useState(0);
    function addToCart(itemId) {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
            setCartLength((prev) => (prev + 1));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            setCartLength((prev) => (prev + 1));
        }
    }
    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        setCartLength((prev) => (prev - 1));
    }
    function getTotalCartAmount() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let isItem = food_list.find((product) => product._id === item)
                totalAmount += isItem.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartLength,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}