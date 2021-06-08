


export function sum(a, b ) {
return console.log(a+b)
}

export function FilterIgual(array, item,  igual, setState) {
  const ar  =  array.filter(i => i[item] == igual || String(i[item]).includes(igual) )
   return setState(ar)
    }



export function FilterExist(array, item, setState) {
    const ar  =  array.filter(i => i[item])
     return setState(ar)
      }


 export function controlScaleImgItemClothe() {
  let clotheHover = document.querySelectorAll('#Clothe-hover')
  let imgtoscale = document.querySelectorAll('#imgtoscale') 
  clotheHover.forEach((item, index) => item.addEventListener('mouseover', function () {
  imgtoscale[index].classList.add('scale')}))
  clotheHover.forEach((item, index) => item.addEventListener('mouseout', function () {
  imgtoscale[index].classList.remove('scale')}))
 }     



  
  
  

