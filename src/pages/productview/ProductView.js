import {useEffect, useContext} from 'react'
import {Information} from './components/Information'
import {Link} from 'react-router-dom'
import {removeCatálogoElement} from '../functions'
import {Clothe} from '../compras/components/Clothe'
import {controlScaleImgItemClothe} from '../compras/functions'

export const ProductViews = ({clothe, CouldLike})  => {



    useEffect(() => {
        removeCatálogoElement()
        controlScaleImgItemClothe()
     }, [])
                                
        

    return(
            <section>
            <div id='Paths'>
                   <Link to='/' >Compras</Link> {'>'} { clothe && clothe.title}
            </div>
            <Information clothe={clothe} />
            
              <div id='CouldLike'>
                  <h3 id='CouldLike-title' >Você também pode gostar</h3>
              <div id='Clothe-section' style={{border: 'none'}} >
                
                {CouldLike && CouldLike.map(clothe => <Clothe clothe={clothe} />)}
               </div>
              </div>
            </section>
         
    )
}