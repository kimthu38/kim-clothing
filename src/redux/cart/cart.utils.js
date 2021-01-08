export const addItemToCart = (cartItems, itemToAdd) => {
    let existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingItem){
        return cartItems.map(item => (
            item.id === existingItem.id ?
            {...item, quantity: item.quantity + 1}
            : item
        ))
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const clearCartItem = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id !== itemToClear.id);
}

export const removeItem = (cartItems, itemToRemove) => {
    let existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingItem.quantity > 1){
        return cartItems.map(item => (
            item.id === existingItem.id ?
            {...item, quantity: item.quantity - 1}
            : item
        ))
    }

    return clearCartItem(cartItems, itemToRemove);
}