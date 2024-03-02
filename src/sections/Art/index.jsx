import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"
import PropTypes from 'prop-types'

function ArtsSection({baseUrl}) {
  const[artObjects, setArtObjects] = useState([])
  const [artUrl, SetArtUrl] = useState(`${baseUrl}art`) 

  useEffect(() => {
    fetch(artUrl)
      .then((res) => res.json())
      .then((data) =>{setArtObjects(data)})
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
  baseUrl: PropTypes.string
}

export default ArtsSection
