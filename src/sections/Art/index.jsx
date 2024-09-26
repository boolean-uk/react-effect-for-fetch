import {useEffect, useState} from 'react'
import ArtList from './components/ArtList'

let info = [{imgURL:"https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg",artist:'Artist: Gustave Caillebotte',title:'Paris Street; Rainy Day', publicationHistory:[
'Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.',
'Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.',
'Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.'

]}]


function ArtsSection() {
  const [serverUrl, setServerUrl] = useState(`https://boolean-api-server.fly.dev/art`)
  const [DBdata, setData] = useState(info)

  useEffect(()=>{
    fetch(serverUrl)
        .then(res => res.json())
        .then(data =>  setData(data))
   },[serverUrl])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ArtList dataList={DBdata}/>
      </div>
    </section>
  )
}

export default ArtsSection

