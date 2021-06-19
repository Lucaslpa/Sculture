
export function DeleteItemFromClothesLocalStorage(id) {
    console.log(id)
    const oldArray =  JSON.parse(localStorage.getItem('clothes'))
    const newArray = oldArray.filter(clothe => clothe.id !== id)
    localStorage.setItem("clothes", JSON.stringify([...newArray]))

}

export function getInfosCart() {
    const localStorageClothesOfCart = JSON.parse(localStorage.getItem('clothes'))
    if(localStorageClothesOfCart) {


        return {
            subTotal: getSubTotal(localStorageClothesOfCart),
            clothesArray: convertOriginalArrayToArrayCartFormat(localStorageClothesOfCart)
        }
    } else {
       return}
}

export function convertOriginalArrayToArrayCartFormat(arrayClothes) {
    const newClothesArray =  arrayClothes.map(item => {
       if(item.quantity) {
        item.price = item.price * item.quantity 
        if(item.promotion) {
            item.promotion = item.promotion * item.quantity
        }
        console.log(item.price, item.quantity,item.promotion)

        return item
       } else {
           item.price = 0
           item.promotion = 0
           return item
       }
   })
   return newClothesArray
}


export function getSubTotal(arrayClothes) {
    if(arrayClothes) {
        const prices =  arrayClothes.map(item => {
            if(item.promotion) {
                return item.promotion * item.quantity
            } else {
                 return item.price * item.quantity}})
       if(prices.length>1) {
        const sum = prices.reduce((previeus, current) => previeus + current)
        return sum} 
        else {
          return prices[0]}}
    else  {
       return 0
     }
}

export function updateQuantity(id, value) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))

    const newArray = cartItemsArray.map(item => {
        if(item.id === id) {
            item.quantity = parseInt(value)
            return item
        }else  return item
    } )
       
       localStorage.setItem("clothes", JSON.stringify([...newArray]))
  }