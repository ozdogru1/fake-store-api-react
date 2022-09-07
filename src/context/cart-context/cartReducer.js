
export const cartReducer = (state, { type, payload }) => {
    const existItem = state.cart.find(item => item.id === payload.id)

    switch (type) {
        case "ADD_TO_CART":
            if (existItem) {
                return {
                    cart: state.cart.map(cartItem => cartItem.id === existItem.id ? { ...existItem, qty: existItem.qty + 1 } : cartItem)
                }
            } else {
                return {
                    cart: [...state.cart, { ...payload, qty: 1 }]
                }
            }
        case "REMOVE_CART":
            return {
                cart: state.cart.filter(item => item.id !== payload)
            }
        case "DECREASE_QTY":

            if (existItem.qty > 1) {
                 return {
                    cart: state.cart.map(cartItem => cartItem.id === existItem.id ? { ...existItem, qty: existItem.qty - 1 } : cartItem)
                }
            }



        default:
            break
    }
}