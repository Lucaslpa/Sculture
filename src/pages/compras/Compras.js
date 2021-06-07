
import { useEffect } from 'react'
import {clothesArray} from './comprasExample'



export const Compras = () => {
        var clotheHover, imgtoscale
         
    


    
    const Clothe = ({clothe}) => { 
         return ( <div id='Clothe'> 
                      <div id='imgandhover'> 
                         <img alt='clothe' id='imgtoscale' src={clothe.link}/>
                         <div id='Clothe-hover' > <a href='/' >VISUALIZAÇÃO RÁPIDA</a> </div>
                      </div>
                    <div id='Clothe-title' >{clothe.title}</div>
                   {
                        clothe.promotion ? (
                             <div>
                                <span id='Clothe-price' style={{color: 'rgba(100, 100, 100, 0.6)'}} ><strike>R$ {clothe.price}</strike></span> 
                                <br></br> 
                                <span id='Clothe-price' >R$ {clothe.promotion}</span>  
                                
                                <span id='Clothe-price' style={{marginLeft: 20}}  >Promoção!!</span>
                             </div>
                        ) :  <span id='Clothe-price'>R$ {clothe.price}</span>    
                   }            
                  </div>)}
  
  const Category = () => { 
          return (<ul id='Category'>
                  <li><a href='/' >Partes inferiores</a></li>
                  <li><a href='/' >Tops</a></li>
                  <li><a href='/' >Promoções</a></li>
                  </ul>)}


   

    useEffect(() => {
         clotheHover = document.querySelectorAll('#Clothe-hover')
         imgtoscale = document.querySelectorAll('#imgtoscale')
         
         clotheHover.forEach((item, index) => item.addEventListener('mouseover', function () {
          imgtoscale[index].classList.add('scale')

         } ))
         clotheHover.forEach((item, index) => item.addEventListener('mouseout', function () {
          imgtoscale[index].classList.remove('scale')

         } ))
    }, [])
     
    return ( 
          <section id='Compras' > 
               <Category/>
               <div id='Clothe-section'>
                {
                   clothesArray && clothesArray.map(clothe => <Clothe clothe={clothe} />   )
                }
               </div>
          </section>
    )
}