import PublicationHistoryList from "./PublicationHistoryList"
import PropTypes from 'prop-types'

function ArtListItem({artObject, baseUrl}) {
    return (
        <>
        <div className="frame">
          <img src={`${baseUrl}${artObject.imageURL}`} />
        </div>
        <h3>{artObject.title}</h3>
        <p>Artist: {artObject.artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList pubHistoryList={artObject.publicationHistory}></PublicationHistoryList>
        </>
    )
}

ArtListItem.propType ={
    artObject: PropTypes.object,
    baseUrl: PropTypes.string
}

export default ArtListItem