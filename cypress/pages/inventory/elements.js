export const elements = {
    itemAddedToCart: (item) => `[data-test="add-to-cart-${parseItemAddedToCart(item)}"]`,
    itemRemovedFromCart: (item) => `[data-test="remove-${parseItemAddedToCart(item)}"]`
}

function parseItemAddedToCart(item){
    return item.replaceAll(' ', '-').toLowerCase()
}