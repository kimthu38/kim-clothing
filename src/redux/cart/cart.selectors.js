import { createSelector } from "reselect";

const cartItems = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartItems],
    cart => cart.cartItems
)

export const cartHiddenSelector = createSelector(
    [cartItems],
    cart => cart.hidden
)

export const totalItemsSelector = createSelector(
    [cartItemsSelector],
    items => items.reduce((acc, item) => acc + item.quantity, 0)
)

export const totalPriceSelector = createSelector(
    [cartItemsSelector],
    items => items.reduce((acc, item) => (acc + (item.price * item.quantity)), 0)
)