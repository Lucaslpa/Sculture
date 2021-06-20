import { createContext, useEffect, useState } from 'react'
import { getNumberOfItemsInArrayLocalStorage } from './function'




export const updateCartContext = createContext()




export const UpdateCartContext = (props) => {
     const [NumberInArray, setNumberInArray] = useState()

     function getNumberInArray() {
          const number = getNumberOfItemsInArrayLocalStorage()
          setNumberInArray(number)
     }

     useEffect(() => getNumberInArray(), [])

     return (
          <updateCartContext.Provider value={{ NumberInArray, getNumberInArray }} >
               {props.children}
          </updateCartContext.Provider >

     )
}