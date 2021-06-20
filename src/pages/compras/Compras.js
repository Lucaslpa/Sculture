
import { useState } from 'react'
import { Clothe } from './components/Clothe'
import { Category } from './components/Category'
export const Compras = ({ clothes, setClothe }) => {


    const [roupas, setRoupas] = useState(clothes)
    return (
        <section id='Compras' >
            <Category clothes={clothes} setRoupas={setRoupas} />
            <div id='Clothe-section'>
                {roupas && roupas.map(clothe => <Clothe key={clothe.id} setProductOfView={setClothe} clothe={clothe} />)}
            </div>
        </section>
    )
}