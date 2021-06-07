import cart from '../../../assets/cart.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'
import menu from '../../../assets/menu.svg'
import x from '../../../assets/letra-x.svg'
import { useEffect, useState } from 'react'





export const Header = () => {
      var getNavItemsArray 
      const [menuOpen, setMenuOpen] = useState(false)
      

      function selectPage(e) {
           e.preventDefault()
           getNavItemsArray.forEach(i => i.classList.remove('Selected'))
           this.classList.add('Selected')
      }

       useEffect(()=> {
         getNavItemsArray = document.querySelectorAll('#Nav-Item')
         getNavItemsArray.forEach(i => i.addEventListener('click',  selectPage))
       }, [])


 const Menu = () => {
       return ( 
            <>
            {menuOpen ? (
                    <img alt='close menu' id='Menu-Icon-x' onClick={e => setMenuOpen(!menuOpen)}  src={x} />
                  ) : (
                    <img  alt='open menu' id='Menu-Icon' onClick={e => setMenuOpen(!menuOpen)}  src={menu} />)
            }          
           {menuOpen &&  <nav id='Menu-Nav' >
             <a href='/'id='Menu-Nav-Item' >Compras</a>
             <a href='/'id='Menu-Nav-Item' >Catálogo</a>
             <a href='/'id='Menu-Nav-Item' >Sobre</a>
             <a href='/'id='Menu-Nav-Item' >Contato</a>
             </nav>}  
                    
           </>
       )
 }

    return (
         <div id='Header'>
              <nav id='Header-Nav' >
                   <a href='/'id='Nav-Item' className='Selected' >Compras</a>
                   <a href='/'id='Nav-Item' >Catálogo</a>
                   <a href='/'id='Nav-Item' >Sobre</a>
                   <a href='/'id='Nav-Item' >Contato</a>
              </nav>
              <Menu/>
               <div id='Logo' ><a  href='/' >Alameda </a></div>
              <div id='Header-icons' >
                   
                   <img alt='instagrm' id='Header-Icon-instagram' src={instagram} />
                   <img alt='twitter' id='Header-Icon-twitter' src={twitter}/>
                   <div id='Header-Icon-Cart' >
                       <img alt='cart' src={cart}/> 
                       <span>0</span>
                   </div>
               </div>
         </div>
    )
}

