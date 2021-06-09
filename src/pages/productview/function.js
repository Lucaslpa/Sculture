


export function addClotheToCartInLocalStorage(clothe) {
         
  const oldArray = JSON.parse(localStorage.getItem('clothes'))
  console.log(clothe)

  if(!oldArray) {
    console.log(clothe)
   return localStorage.setItem("clothes", JSON.stringify([clothe]))
  } 
  
  const sameItem = oldArray.filter(item => item.id === clothe.id)
  if(sameItem.length > 0) {
        console.log('item já adicioado')
       return 
  } else {
   localStorage.setItem("clothes", JSON.stringify([...oldArray, clothe]))
  return   
  } 
}