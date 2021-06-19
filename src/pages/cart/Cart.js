import { useContext, useEffect, useState } from "react"
import {removeCatálogoElement} from '../functions'
import {DeleteItemFromClothesLocalStorage, updateQuantity , getInfosCart} from './function'
import {updateCartContext} from '../home/contextsUpdateCart' 


export const Cart = () => { 
         const [SubTotal, setSubTotal] = useState(0)
         const [CartArray, setCartArray] = useState([])
         const [CartInfos, setCartInfos] = useState({})
         const {getNumberInArray} = useContext(updateCartContext)        
         
         useEffect(() => {
              removeCatálogoElement()
              const cartInfos = getInfosCart()
              setCartInfos(cartInfos)

              },[])

              function onClickDeleteItemFromCart(id) {
               DeleteItemFromClothesLocalStorage(id)
               const cartInfos = getInfosCart()
               setCartInfos(cartInfos)
               getNumberInArray()
              }

     return ( 
          <div id='Cart'>
              <h3>CARRINHO DE COMPRAS</h3>
               {CartInfos.clothesArray && CartInfos.clothesArray.map( Item => (
                    <div  key={Item.id} id='Cart-Item'> 
                    <div id='Cart-Item-info'>
                    <button onClick={e => onClickDeleteItemFromCart(Item.id)} >X</button>
                    <img alt='Product'  src={Item.link}></img>    
                    </div >
                    <div id='ajust-title' >
                   <strong>{Item.title}</strong>
   
                     <div id='quantityandprice' >
                     <input min='1' type='number' value={Item.quantity} onChange={e =>{
                          updateQuantity(Item.id, e.target.value)
                         const cartInfos = getInfosCart()
                         setCartInfos(cartInfos)
                         } }
                     
                    />
                      {
                           Item.promotion ? (
                               <div id='Cart-Item-Prices' >
                                    
                               <span style={{color:'rgba(100, 100, 100, 0.6)'}} ><strike>R$ {Item.price}</strike></span>
                               <span>R$ {Item.promotion}</span>
                               </div>
                           ) : <span id='span-price' > R$ {Item.price}</span>
                      }
                     </div>
                    </div>
                    
                </div>
               )
               )}
               <div id='SubTotal' >
                    <span>Total R$ {CartInfos.subTotal}</span>
                    <button>COMPRAR</button>
               </div>
          </div>
     )
}