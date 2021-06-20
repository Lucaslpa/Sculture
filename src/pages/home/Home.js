import { Header } from './components/header'
import { Footer } from './components/footer'
import { Compras } from '../compras/Compras'
import { Catálogo } from '../catálogos/Catálogo'
import { Sobre } from '../sobre/Sobre'
import { Contato } from '../contato/Contato'
import { ProductViews } from '../productview/ProductView'
import { Cart } from '../cart/Cart'
import { getTotalItemsInArrayFromLocalStorage } from './function'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import { clothesArray } from './comprasExample'
import { useState, createContext, useEffect } from 'react'
import { UpdateCartContext } from './contextsUpdateCart'

export const Home = () => {
   const [idProductToBeInProductView, setItemClothe] = useState()
   const [QuantityItemsInCart, setQuantityItemsItemsCart] = useState(0)
   createContext(QuantityItemsInCart, setQuantityItemsItemsCart)



   useEffect(() => {
      getTotalItemsInArrayFromLocalStorage(setQuantityItemsItemsCart)
   }, []
   )
   return (
      <Router>
         <UpdateCartContext>
            <Header />
            <Switch>
               <Route exact path='/'>
                  <Compras setClothe={setItemClothe} clothes={clothesArray} />
               </Route>
               <Route path='/Cart'>
                  <Cart cartArray={[clothesArray[5], clothesArray[6], clothesArray[2], clothesArray[3]]} />
               </Route>
               <Route path='/Catálogo' >
                  <Catálogo />
               </Route>
               <Route path='/Sobre' >
                  <Sobre />
               </Route>
               <Route path='/Contato' >
                  <Contato />
               </Route>
               <Route exact path='/ProductView' >
                  <ProductViews
                     setProductOfView={setItemClothe}
                     clothe={clothesArray.filter(item => item.id === idProductToBeInProductView)[0]}
                     CouldLike={[clothesArray[5], clothesArray[1], clothesArray[6]]} />
               </Route>

            </Switch>
            <Footer />
         </UpdateCartContext>

      </Router>
   )
}

