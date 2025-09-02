import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {

  const [arts, setArts] = useState([]);
  const baseurl = 'https://boolean-uk-api-server.fly.dev'

  useEffect(() => {fetch('https://boolean-uk-api-server.fly.dev/art').then(res => res.json()).then(setArts)}, [])

  return (
  <section>
    <h2>Arts Section</h2>
    <div className="scroll-container">
      <ArtList arts={arts} baseurl={baseurl}/>
    </div>
</section>
  )
}
export default ArtsSection
