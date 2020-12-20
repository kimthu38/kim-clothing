import { addItemToCart, clearCartItem, removeItem } from "./cart.utils"

const { cartActionTypes } = require("./cart.types")

const INITTIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: clearCartItem(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;