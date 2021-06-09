import cart from '../../../assets/cart.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'
import menu from '../../../assets/menu.svg'
import x from '../../../assets/letra-x.svg'
import { useEffect, useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import {updateCartContext} from '../../home/contextsUpdateCart'




export const Header = () => {
      var getNavItemsArray 
      const [menuOpen, setMenuOpen] = useState(false)
      
      const {NumberInArray, setNumberInArray} =  useContext(updateCartContext)
      useEffect(() => console.log('header:', NumberInArray) , [NumberInArray])
      

      function selectPage(e) {
           getNavItemsArray.forEach(i => i.classList.remove('Selected'))
           this.classList.add('Selected')
      }
       useEffect(()=> {
         getNavItemsArray = document.querySelectorAll('#Nav-Item')
         getNavItemsArray.forEach(i => i.addEventListener('click',  selectPage))
        
       }, [])
       useEffect(() => {
          let navmenu = document.querySelectorAll('#Menu-Nav-Item')
           navmenu.forEach(i => i.addEventListener('click', function () {
                setMenuOpen(!menuOpen)
           }))         
       } , [menuOpen])
       


 const Menu = () => {
       return ( 
            <>
            {menuOpen ? (
                    <img alt='close menu' id='Menu-Icon-x' onClick={e => setMenuOpen(!menuOpen)}  src={x} />
                  ) : (
                    <img  alt='open menu' id='Menu-Icon' onClick={e => setMenuOpen(!menuOpen)}  src={menu} />)
            }          
           {menuOpen &&  <nav id='Menu-Nav' >
             <Link to='/'id='Menu-Nav-Item'>Compras</Link>
             <Link to='/Catálogo'id='Menu-Nav-Item' >Catálogo</Link>
             <Link to='/Sobre'id='Menu-Nav-Item' >Sobre</Link>
             <Link to='/Contato'id='Menu-Nav-Item' >Contato</Link>
             </nav>}  
                    
           </>
       )
 }

    return (
         <div id='Header'>
              <nav id='Header-Nav' >
                   <Link to='/'id='Nav-Item' className='Selected' >Compras</Link>
                   <Link to='/Catálogo'id='Nav-Item' >Catálogo</Link>
                   <Link to='/Sobre'id='Nav-Item' >Sobre</Link>
                   <Link to='/Contato'id='Nav-Item' >Contato</Link>
              </nav>
              <Menu/>
               <div id='Logo' >
                    <Link to='/' onClick={e => {
                     if(window.innerWidth < 900) {
                          return
                     }    
                    getNavItemsArray.forEach(i => i.classList.remove('Selected'))
                    getNavItemsArray[0].classList.add('Selected') }}
                     to='/' >Alameda</Link>
               </div>
              <div id='Header-icons' >
                   <img alt='instagrm' id='Header-Icon-instagram' src={instagram} />
                   <img alt='twitter' id='Header-Icon-twitter' src={twitter}/>
                   <Link to='/Cart' style={{textDecoration: 'none'}} id='Header-Icon-Cart'  >
                       <img alt='cart' src={cart}/> 
                       <span>{NumberInArray}</span>
                   </Link>
               </div>
         </div>
    )
}

