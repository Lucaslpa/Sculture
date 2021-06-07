import {Header} from './components/header'
import {Footer} from './components/footer'
import {Compras} from '../compras/Compras'
import {Catálogo} from '../catálogos/Catálogo'

import {
     BrowserRouter as Router,
     Switch,
     Route,
   } from "react-router-dom";


export const Home = () => {
     return (
          <Router>
              <Header/>
              <Switch>
                   <Route exact path='/'>
                   <Compras/>
                   </Route>
                   <Route path='/Catálogo' >
                   <Catálogo/>
                   </Route>
              </Switch> 
          
               <Footer/>
          </Router>
     )
}

