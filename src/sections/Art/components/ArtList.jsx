import ArtListItem from "./ArtListItem"
import PropTypes from 'prop-types'

function ArtList({artObjects, baseUrl}) {
  return (
    <ul className="art-list">
        {artObjects.map((artObject, index) => 
        <li key={index}>
            <ArtListItem artObject={artObject} baseUrl={baseUrl}></ArtListItem>
        </li>)}
    </ul>
  )
}

ArtList.propTypes = {
    artObjects: PropTypes.array,
    baseUrl: PropTypes.string
}

export default ArtList