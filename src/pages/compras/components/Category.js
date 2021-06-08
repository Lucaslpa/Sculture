import {FilterIgual, FilterExist,} from '../functions'

export const Category = ({clothes, setRoupas}) => { 
    return (<ul id='Category'>
                 <li>
                  <a href='/' onClick={(e) => {
                     e.preventDefault()
                     setRoupas(clothes)
                }}>Início</a></li>
                <li>
                  <a href='/' onClick={(e) => {
                     e.preventDefault()
                     FilterIgual(clothes,'title', 'Goku', setRoupas)
                }}>Partes inferiores</a></li>
                <li><a href='/' onClick={(e) => {
                     e.preventDefault()
                     FilterIgual(clothes,'title', 'Luffy', setRoupas)
                }} >Tops</a></li>
                <li><a href='/' onClick={(e) => {
                     e.preventDefault()
                     FilterExist(clothes,'promotion', setRoupas)
                }} >Promoções</a></li>
            </ul>)}