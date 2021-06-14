
export function DeleteItemFromClothesLocalStorage(id) {
    const oldArray =  JSON.parse(localStorage.getItem('clothes'))
    const newArray = oldArray.filter(clothe => clothe.id !== id)
    localStorage.setItem("clothes", JSON.stringify([...newArray]))

}

export function getItemsArrayFromLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
     if(!cartItemsArray){
         return
     }
    setState(cartItemsArray)
}

export function getSubTotal(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    if(!cartItemsArray) {
        return
    }
   const prices =  cartItemsArray.map(item => {
         if(item.promotion) {
             return item.promotion * item.quantity
         } else {
              return item.price * item.quantity
         }
    })
    if(!prices.length) {
        return
      }
    if(prices.length > 1) {
         const sum = prices.reduce((previeus, current) => previeus + current)
         setState(sum)
    } else {
         setState(prices[0])
    }
  

}

export function updateItemClotheInArray(array, setArray ,id, itemToUpdate, value) {
    
    
    const newArray = array.map(item => {
        if(item.id === id) {
            item[itemToUpdate] = value
            console.log('anterior', item.price, item.quantity)
            return item
        }else  return item
    } )
       setArray([...newArray])
       localStorage.setItem("clothes", JSON.stringify([...newArray]))
     
  }