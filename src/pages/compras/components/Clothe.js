
export const Clothe = ({clothe}) => { 
    return ( <div id='Clothe'> 
                <div id='imgandhover'> 
                   <img alt='clothe' id='imgtoscale' src={clothe.link}/>
                   <div id='Clothe-hover' > <a href='/' >VISUALIZAÇÃO RÁPIDA</a> </div>
                 </div>
                   <div id='Clothe-title' >{clothe.title}</div>
                   {clothe.promotion ? (
                    <div>
                      <span id='Clothe-price'
                       style={{color: 'rgba(100, 100, 100, 0.6)'}} >
                            <strike>R$ {clothe.price}</strike>
                      </span> 
                      <br></br> 
                      <span id='Clothe-price' >R$ {clothe.promotion}</span>  
                      <span id='Clothe-price' style={{marginLeft: 20}}  >Promoção!!</span>
                    </div>) :  <span id='Clothe-price'>R$ {clothe.price}</span>    
                       }            
              </div>)}