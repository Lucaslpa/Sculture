import {useEffect} from 'react'

export const Sobre = () => {

    useEffect(() => {
       const catalogo = document.getElementById('Catálogo-link')
       const media = document.getElementById('Footer-Media')
       media.style.marginTop = '70px'
       catalogo.style.display = 'none'

    }, [])
     
    return (
        <main id='Sobre' >
             <img width='90%' src="https://pm1.narvii.com/6161/e103c1fdbef7b271e6305c6e1206060d67674636_hq.jpg"/>
            <div>
             <h4>Feitos com amor</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris. At auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc non blandit. Dui sapien eget mi proin sed libero. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. A condimentum vitae sapien pellentesque habitant. Cras tincidunt lobortis feugiat vivamus at augue. Habitant morbi tristique senectus et. Consectetur purus ut faucibus pulvinar elementum integer enim. Iaculis urna id volutpat lacus laoreet non curabitur. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Velit sed ullamcorper morbi tincidunt ornare massa eget. Quis blandit turpis cursus in hac. Elementum facilisis leo vel fringilla. Tincidunt arcu non sodales neque sodales ut etiam sit. Vitae nunc sed velit dignissim sodales ut eu. Et malesuada fames ac turpis egestas integer.
 <br></br>
 <br></br>
Tortor dignissim convallis aenean et tortor at risus viverra. Vivamus at augue eget arcu. Rhoncus est pellentesque elit ullamcorper dignissim cras. Gravida dictum fusce ut placerat orci nulla pellentesque. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Imperdiet nulla malesuada pellentesque elit eget. Maecenas pharetra convallis posuere morbi leo urna molestie at. Eros donec ac odio tempor orci dapibus ultrices. Et ultrices neque ornare aenean. Interdum velit laoreet id donec. Dolor sit amet consectetur adipiscing elit pellentesque. Eleifend donec pretium vulputate sapien nec sagittis. Facilisi etiam dignissim diam quis enim lobortis. Imperdiet dui accumsan sit amet. Non tellus orci ac auctor augue mauris augue neque gravida. Maecenas sed enim ut sem viverra aliquet. Mauris pharetra et ultrices neque ornare aenean.
              </p>
            </div>
        </main>
    )
}