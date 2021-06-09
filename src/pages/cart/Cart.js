import { useEffect, useState } from "react"
import {removeCatálogoElement} from '../functions'
import {DeleteItemFromClothesLocalStorage,getItemsArrayFromLocalStorage,getSubTotal} from './function'
 
export const Cart = () => { 
         const [SubTotal, setSubTotal] = useState(0)
         const [CartArray, setCartArray] = useState([])

  useEffect(() => {
     removeCatálogoElement()
    getItemsArrayFromLocalStorage(setCartArray)
    getSubTotal(setSubTotal)

  }, [])

 const ItemCart = ({Item}) => { 
       return ( 
            <div  key={Item.id} id='Cart-Item'> 
                 <div id='Cart-Item-info'>
                 <button onClick={e => {
                       DeleteItemFromClothesLocalStorage(Item.id)
                       getItemsArrayFromLocalStorage(setCartArray)
                 }} >X</button>
                 <img  src={Item.link}></img>    
                 </div >
                 <div id='ajust-title' >
                <strong>{Item.title}</strong>

                  <div id='quantityandprice' >
                  <input type='number' defaultValue='1' min='1' />
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
 }


     return ( 
          <div id='Cart'>
              <h3>CARRINHO DE COMPRAS</h3>
               {CartArray && CartArray.map( item => (
                    <ItemCart  Item={item} />
               )
               )}
               <div id='SubTotal' >
                    <span>Total R$ {SubTotal}</span>
                    <button>COMPRAR</button>
               </div>
          </div>
     )
}