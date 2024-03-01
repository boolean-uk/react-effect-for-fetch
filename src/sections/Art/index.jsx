import { useEffect, useState } from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {

  const [art, setArt] = useState([])

  const baseURL = "https://boolean-api-server.fly.dev"

  useEffect(() => {
    fetch(`${baseURL}/art`)
    .then((response) => response.json())
    .then(setArt);
  }, []);


  return (
    <section>
  <h2>Arts Section</h2>
  <div className="scroll-container">
    <ArtList art={art} setArt={setArt} baseURL={baseURL}/>
  </div>
</section>
  )
}

export default ArtsSection
