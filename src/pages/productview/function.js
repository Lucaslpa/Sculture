


export function addClotheToCartInLocalStorage(clothe) {
         
       const oldArray = JSON.parse(localStorage.getItem('clothes'))
       const sameItem = oldArray.filter(i => i.id === clothe.id)
       if(sameItem.length) {
             console.log('item já adicioado')
            return 
       } else {
        localStorage.setItem("clothes", JSON.stringify([...oldArray ,clothe]))
       return   console.log(JSON.parse(localStorage.getItem('clothes')))
       } 
}