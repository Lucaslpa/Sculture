
export function DeleteItemFromClothesLocalStorage(id) {
    const oldArray =  JSON.parse(localStorage.getItem('clothes'))
    const newArray = oldArray.filter(clothe => clothe.id !== id)
    localStorage.setItem("clothes", JSON.stringify([...newArray]))

}

export function getItemsArrayFromLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    setState(cartItemsArray)
}

export function getSubTotal(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
   const prices =  cartItemsArray.map(item => {
         if(item.promotion) {
             return item.promotion
         } else {
              return item.price
         }
    })

    if(prices.length > 1) {
         const sum = prices.reduce((previeus, current) => previeus + current)
         setState(sum)
         console.log(sum)
    } else {
         setState(prices[0])
    }
  
  console.log(prices)

}