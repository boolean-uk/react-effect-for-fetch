import { useState, useEffect } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {

  const url = 'https://boolean-uk-api-server.fly.dev/art'

  const [art, setArt] = useState([])

  useEffect( () => {
    const fetchusers = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json();
      setArt(data)
    }
    catch(error){
      console.error("Failed to fetch the users", error)
    }
  }

  fetchusers()
}, []);




  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
        <ArtList art={art}/>
        </ul>
        
      </div>
    </section>
  )
}

export default ArtsSection
