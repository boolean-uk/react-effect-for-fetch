//import PHL
import PublicationHistoryList from "./PublicationHistoryList"
//import porp-types
import PropTypes from 'prop-types'

//name function and destruct poperties
function ArtListItem({artObject, baseUrl}) {
    //return <div> "frame" => <h4> Publication History, bring in PHL comp
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
//Define ALI comp props, AO is object (conatins piece details) and BU (string as base for object resouces i.e an Img)
ArtListItem.propType ={
    artObject: PropTypes.object,
    baseUrl: PropTypes.string
}

//export

export default ArtListItem