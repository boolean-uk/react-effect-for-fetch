import { useState, useEffect } from "react";
import ArtListComponent from "./components/ArtList";


export default function ArtsSection() {
  const apiURL = 'https://boolean-api-server.fly.dev'
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch(`${apiURL}/art`)
      .then(response => response.json())
      .then(data => setArts(data), console.log(arts))
  }, [])



  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtListComponent arts={arts} apiURL={apiURL} />
      </div>
    </section>
  )
}

