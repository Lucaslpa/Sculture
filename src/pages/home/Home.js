import {Header} from './components/header'
import {Footer} from './components/footer'
import {Compras} from '../compras/Compras'
import {Catálogo} from '../catálogos/Catálogo'
import {Sobre} from '../sobre/Sobre'
import {Contato} from '../contato/Contato'
import {ProductViews} from '../productview/ProductView'
import {
     BrowserRouter as Router,
     Switch,
     Route,
   } from "react-router-dom";
import {clothesArray} from './comprasExample'

export const Home = () => {
     return (
          <Router>
              <Header/>
              <Switch>
                   <Route exact path='/compras'>
                     <Compras clothes={clothesArray} />
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
                   <Route exact path='/' >
                          <ProductViews  clothe={clothesArray[5]} CouldLike={[clothesArray[5],clothesArray[1],clothesArray[6]]} />
                   </Route>
              </Switch> 
          
               <Footer/>
          </Router>
     )
}

