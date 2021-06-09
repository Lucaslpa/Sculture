import {Header} from './components/header'
import {Footer} from './components/footer'
import {Compras} from '../compras/Compras'
import {Catálogo} from '../catálogos/Catálogo'
import {Sobre} from '../sobre/Sobre'
import {Contato} from '../contato/Contato'
import {ProductViews} from '../productview/ProductView'
import {Cart} from '../cart/Cart'
import {
     BrowserRouter as Router,
     Switch,
     Route,
   } from "react-router-dom";
import {clothesArray} from './comprasExample'
import { useState } from 'react'

export const Home = () => {
   const [itemClothe, setItemClothe] = useState()

     return (
          <Router>
              <Header/>
              <Switch>
                   <Route exact path='/'>
                     <Compras  setClothe={setItemClothe} clothes={clothesArray} />
                   </Route>
                   <Route path='/Catálogo' >
                      <Catálogo/>
                   </Route>
                   <Route path='/Sobre' >
                      <Sobre/>
                   </Route>
                   <Route path='/Contato' >
                          <Contato/>
                   </Route>
                   <Route exact path='/ProductView' >
                          <ProductViews   clothe={clothesArray[itemClothe]} CouldLike={[clothesArray[5],clothesArray[1],clothesArray[6]]} />
                   </Route>
                   <Route path='/Cart'>
                          <Cart cartArray={[clothesArray[5],clothesArray[6],clothesArray[2],clothesArray[3]]}/>
                   </Route>
              </Switch>       
               <Footer/>
          </Router>
     )
}

