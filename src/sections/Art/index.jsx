import { useState, useEffect} from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const [arts, setArts] = useState([])
  const url = "https://boolean-uk-api-server.fly.dev/art"
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      console.log(jsonData)
      setArts(jsonData)
    }
    fetchData()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList arts = {arts} />
      </div>
    </section>
  )
}

export default ArtsSection
