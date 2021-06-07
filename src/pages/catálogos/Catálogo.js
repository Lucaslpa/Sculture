
import Carousel, {autoplayPlugin, arrowsPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export const Catálogo = () => {
     return (
         <main id='Catálogo' >
               <div id='catálogo-carousel'>
               <Carousel  
               plugins={[
                'infinite',
               {
                 resolve: autoplayPlugin,
                 options: {
                   interval: 2000,
                 }
               },
               {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <button id ='Slide-button'>{'<'}</button>,
                  arrowLeftDisabled:<button></button>,
                  arrowRight: <button id='Slide-button' >{'>'}</button>,
                  arrowRightDisabled: <button></button>,
                  addArrowClickHandler: true,
                }}
             ]}   
             animationSpeed={1000}
               >
                         <img alt='Clothe'  src='https://capricho.abril.com.br/wp-content/uploads/2019/08/billie-eilish-colec3a7c3a3o-desenhos-anime2-2.jpg?quality=85&strip=info&w=650' ></img>
                         <img alt='Clothe' src='https://m.media-amazon.com/images/I/41zGpLIbkVL._SL500_.jpg' ></img>
                 </Carousel> 
               </div>
                 
         </main>
     )
}