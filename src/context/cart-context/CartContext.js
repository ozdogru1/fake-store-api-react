import React, { useReducer, createContext } from "react";
import { cartReducer } from "./cartReducer";
const INITIAL_STATE = {
    cart: []
}

export const CartContext = createContext(INITIAL_STATE)
export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    return (
        <CartContext.Provider value={{cart : state.cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )

}