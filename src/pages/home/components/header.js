import cart from '../../../assets/cart.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'
import menu from '../../../assets/menu.svg'
import x from '../../../assets/letra-x.svg'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { updateCartContext } from '../../home/contextsUpdateCart'




export const Header = () => {
     // eslint-disable-next-line no-var
     var getNavItemsArray
     const [menuOpen, setMenuOpen] = useState(false)

     const { NumberInArray } = useContext(updateCartContext)


     function selectPage() {
          getNavItemsArray.forEach(i => i.classList.remove('Selected'))
          this.classList.add('Selected')
     }
     useEffect(() => {
          getNavItemsArray = document.querySelectorAll('#Nav-Item')
          getNavItemsArray.forEach(i => i.addEventListener('click', selectPage))

     }, [])
     useEffect(() => {
          const navmenu = document.querySelectorAll('#Menu-Nav-Item')
          navmenu.forEach((i) => i.addEventListener('click', function () {
               setMenuOpen(!menuOpen)
          }))
     }, [menuOpen])

     function onClickLogo() {
          if (window.innerWidth < 900) {
               return
          }
          const GetNavItemsArray = document.querySelectorAll('#Nav-Item')

          GetNavItemsArray.forEach(i => i.classList.remove('Selected'))
          GetNavItemsArray[0].classList.add('Selected')
     }

     const Menu = () => {
          return (
               <>
                    {menuOpen ? (
                         <img alt='close menu' id='Menu-Icon-x' onClick={() => setMenuOpen(!menuOpen)} src={x} />
                    ) : (
                         <img alt='open menu' id='Menu-Icon' onClick={() => setMenuOpen(!menuOpen)} src={menu} />)
                    }
                    {menuOpen && <nav id='Menu-Nav' >
                         <Link to='/' id='Menu-Nav-Item'>Compras</Link>
                         <Link to='/Catálogo' id='Menu-Nav-Item' >Catálogo</Link>
                         <Link to='/Sobre' id='Menu-Nav-Item' >Sobre</Link>
                         <Link to='/Contato' id='Menu-Nav-Item' >Contato</Link>
                    </nav>}

               </>
          )
     }

     return (
          <div id='Header'>
               <nav id='Header-Nav' >
                    <Link to='/' id='Nav-Item' className='Selected' >Compras</Link>
                    <Link to='/Catálogo' id='Nav-Item' >Catálogo</Link>
                    <Link to='/Sobre' id='Nav-Item' >Sobre</Link>
                    <Link to='/Contato' id='Nav-Item' >Contato</Link>
               </nav>
               <Menu />
               <div id='Logo' >
                    <Link to='/' onClick={() => onClickLogo()}>sculture</Link>
               </div>
               <div id='Header-icons' >
                    <img alt='instagrm' id='Header-Icon-instagram' src={instagram} />
                    <img alt='twitter' id='Header-Icon-twitter' src={twitter} />
                    <Link to='/Cart' style={{ textDecoration: 'none' }} id='Header-Icon-Cart'  >
                         <img alt='cart' src={cart} />
                         <span>{NumberInArray}</span>
                    </Link>
               </div>
          </div>
     )
}

