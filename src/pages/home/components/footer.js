import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'


export const Footer = () => {
    return (
       <footer id='Footer' >
           <span id='Catálogo-link' >Catálogo 2021</span>
           <div id='Footer-Media' >
               <img alt='instagram' src={instagram}/>
               <img alt='twitter'  src={twitter}/>
           </div>
           <div id='Footer-newsUpdate'>
           <p >Cadastre-se para receber notícias e atualizações.</p>
            <div id='Footer-form' >
               <input  type='email' placeholder='Endereço de e-mail' ></input>
               <button> Cadastre-se </button>
            </div>         
           </div>
           <p id='credits' >Clone de <a href='https://alameda-demo-pt.squarespace.com/lookbook' >template</a> e-commerce da <a href='https://www.squarespace.com/' >squarespace</a> feito por   <a href='https://github.com/lucaslpa12345'>Lucas Pereira</a></p>
       </footer>
    )
}