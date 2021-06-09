


export function addClotheToCartInLocalStorage(clothe) {
         console.log(clothe)
       const oldArray = JSON.parse(localStorage.getItem('clothes'))
       if(!oldArray) {
        return localStorage.setItem("clothes", JSON.stringify([clothe]))
       } 
       
       const sameItem = oldArray.filter(item => item.id === clothe.id)
       console.log(sameItem)
       if(sameItem.length > 0) {
             console.log('item já adicioado')
            return 
       } else {
        localStorage.setItem("clothes", JSON.stringify([...oldArray ,clothe]))
       return   console.log(JSON.parse(localStorage.getItem('clothes')))
       } 
}