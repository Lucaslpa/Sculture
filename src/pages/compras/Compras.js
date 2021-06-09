
import {useEffect, useState } from 'react'
import { controlScaleImgItemClothe} from './functions'
import {Clothe} from './components/Clothe'
import{Category}from './components/Category'
export const Compras = ({clothes, setClothe}) => {
         

const [roupas, setRoupas] = useState(clothes)
useEffect(() => {
     controlScaleImgItemClothe()
},[])
     
    return ( 
          <section id='Compras' > 
               <Category clothes={clothes} setRoupas={setRoupas} />
               <div id='Clothe-section'>
                {roupas && roupas.map(clothe => <Clothe setClothe={setClothe} clothe={clothe} />)}
               </div>
          </section>
    )
}