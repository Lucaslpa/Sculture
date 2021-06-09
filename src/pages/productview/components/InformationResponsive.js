import {useContext} from 'react'
import {addClotheToCartInLocalStorage} from '../function'
import {} from '../../home/function'
import {updateCartContext} from '../../home/contextsUpdateCart'



export const InformationResponsive =  ({clothe}) => {

    const {NumberInArray, getNumberInArray} = useContext(updateCartContext)  


    return (
     
       <div id='InformationResponsive'>
           <h5 id='Information-title' >{clothe.title}</h5>
           {
              clothe.promotion ? ( 
                  <>
                  <span id='Information-Price' style={{color: 'rgba(60, 60, 60, 0.4)'}}  ><strike>{clothe.price}</strike></span>
                  <span id='Information-Price' style={{margin: 20}}  >{clothe.promotion}</span>
                  <strong 
                  style={{backgroundColor: 'black', padding: 5, color: 'white'}}
                  >Promoção</strong>
                  </>
              ) :  <span id='Information-Price' >{clothe.price}</span>
                      
           }
          
           <div id='Select' >
                 <fieldset>
                     <h4>Selecione</h4>
                     <select> 
                             <option defaultValue >Selecione</option> 
                             <option>Lorem ipsum dolor sit amet</option>
                             <option>Lorem ipsum dolor sit amet</option>
                             <option>Lorem ipsum dolor sit amet</option>
                             <option>Lorem ipsum dolor sit amet</option>
                     </select>
                 </fieldset>
           </div>
           <div id='Quantity'>
                 <h4>Quantidade</h4>
                 <input min='1' type='number' defaultValue='1' />
           </div>
           <button onClick={e => {
               addClotheToCartInLocalStorage(clothe)
               getNumberInArray()
           }}>Adicionar ao carrinho</button>
           <div id='Description' >
                  <h4>Descrição</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
           <div id='Details' >
               <h4>Detalhes</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
           </div>
       </div>
       
    )
}