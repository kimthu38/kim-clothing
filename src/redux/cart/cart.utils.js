export const addItemToCart = (cartItems, itemToAdd) => {
    let existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingItem){
        return cartItems.map(item => (
            item.id == existingItem.id ?
            {...item, quantity: item.quantity + 1}
            : item
        ))
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}