
export function getTotalItemsInArrayFromLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'));
    if (!cartItemsArray) {
        return;
    } else {
        return setState(cartItemsArray.length);
    }
}
export function getNumberOfItemsInArrayLocalStorage() {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'));
    if (!cartItemsArray) {
        return;
    }
    return cartItemsArray.length;
}


