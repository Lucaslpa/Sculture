import {createContext, useEffect, useState} from 'react'
import {getNumberOfItemsInArrayLocalStorage} from './function'




export const updateCartContext =  createContext()




export const UpdateCartContext = (props) => { 
       const [NumberInArray, setNumberInArray] = useState(getNumberOfItemsInArrayLocalStorage())
       useEffect(() => console.log(getNumberOfItemsInArrayLocalStorage()) , [setNumberInArray])
      
       function getNumberInArray() {
            setNumberInArray(getNumberOfItemsInArrayLocalStorage())
       }
     
    return ( 
         <updateCartContext.Provider value={{NumberInArray, getNumberInArray}} >
                 {props.children}
         </updateCartContext.Provider >

    )
}