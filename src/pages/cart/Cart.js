import { useEffect, useState } from "react"
import {removeCatálogoElement} from '../functions'


 
export const Cart = ({cartArray}) => { 
         const [SubTotal, setSubTotal] = useState(0)

  useEffect(() => {
     removeCatálogoElement()

  }, [])

 const ItemCart = ({Item}) => { 
       return ( 
            <div id='Cart-Item'> 
                 <div id='Cart-Item-info'>
                 <button>X</button>
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
               {cartArray && cartArray.map( item => (
                    <ItemCart Item={item} />
               )
               )}
               <div id='SubTotal' >
                    <span>Total R$ {SubTotal}</span>
                    <button>COMPRAR</button>
               </div>
          </div>
     )
}