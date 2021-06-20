


export function addClotheToCartInLocalStorage(clothe) {

  const oldArray = JSON.parse(localStorage.getItem('clothes'))

  if (!oldArray) {
    localStorage.setItem("clothes", JSON.stringify([clothe]))
    return alert('Item adicionado com sucesso')
  }

  const sameItem = oldArray.filter((item) => item.id === clothe.id)

  if (sameItem.length > 0) {
    return alert('Item já adicionado')
  } else {
    localStorage.setItem("clothes", JSON.stringify([...oldArray, clothe]))
    return alert('Item adicionado com sucesso')
  }
}