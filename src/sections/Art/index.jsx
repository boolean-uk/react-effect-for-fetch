import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"
import PropTypes from 'prop-types'


function ArtsSection({baseUrl}) {

  const [artObjects, setArtObjects] = useState([])
  const  [artUrl, setArtUrl] = useState(`${baseUrl}art`)

  useEffect(() => {
    fetch(artUrl)
    .then((res) => {
      if(!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    })
    .then((data) => setArtObjects(data))
    .catch((error) => console.error('Fetch error', error))
  }, [artUrl])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artObjects={artObjects} baseUrl={baseUrl}></ArtList>
      </div>
    </section>
  )
}

ArtsSection.propTypes = {
  baseUrl: PropTypes.string.isRequired
}

export default ArtsSection

