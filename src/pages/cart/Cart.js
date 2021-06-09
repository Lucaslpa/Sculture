import { useContext, useEffect, useState } from "react"
import {removeCatálogoElement} from '../functions'
import {DeleteItemFromClothesLocalStorage,getItemsArrayFromLocalStorage,getSubTotal,
updateItemClotheInArray} from './function'
import {updateCartContext} from '../home/contextsUpdateCart' 


export const Cart = () => { 
         const [SubTotal, setSubTotal] = useState(0)
         const [CartArray, setCartArray] = useState([])
         const {getNumberInArray} = useContext(updateCartContext)
         const [value, setValue] = useState(1)
         
         
  useEffect(() => {
     removeCatálogoElement()
    getItemsArrayFromLocalStorage(setCartArray)
    getSubTotal(setSubTotal)

  }, [])




     return ( 
          <div id='Cart'>
              <h3>CARRINHO DE COMPRAS</h3>
               {CartArray && CartArray.map( Item => (
                    <div  key={Item.id} id='Cart-Item'> 
                    <div id='Cart-Item-info'>
                    <button onClick={e => {
                          DeleteItemFromClothesLocalStorage(Item.id)
                          getItemsArrayFromLocalStorage(setCartArray)
                          getNumberInArray()
                    }} >X</button>
                    <img  src={Item.link}></img>    
                    </div >
                    <div id='ajust-title' >
                   <strong>{Item.title}</strong>
   
                     <div id='quantityandprice' >
                     <input min='1' type='number' value={Item.quantity} onChange={e =>{
                          updateItemClotheInArray(CartArray,setValue,Item.id, 'quantity', parseInt(e.target.value))
                          getSubTotal(setSubTotal)

                         } }
                     
                    />
                      {
                           Item.promotion ? (
                               <div id='Cart-Item-Prices' >
                                    
                               <span style={{color:'rgba(100, 100, 100, 0.6)'}} ><strike>R$ {!Item.quantity ? 0 : Math.round(Item.quantity * Item.price)}</strike></span>
                               <span>R$ {!Item.quantity ? 0 : Math.round(Item.quantity * Item.promotion)}</span>
                               </div>
                           ) : <span id='span-price' > R$ {!Item.quantity ? 0 : Math.round(Item.quantity * Item.price)}</span>
                      }
                     </div>
                    </div>
                    
                </div>
               )
               )}
               <div id='SubTotal' >
                    <span>Total R$ {Math.round(SubTotal)}</span>
                    <button>COMPRAR</button>
               </div>
          </div>
     )
}