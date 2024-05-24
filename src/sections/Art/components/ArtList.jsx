import ArtListItem from "./ArtListItem"
import PropTypes from "prop-types"

// name function and extract two props AO & BU

function ArtList ({artObjects, baseUrl}) {
    //return "art-list" <ul>, iterate AO array, arrow func handling AO and index, import A.L.I 
    return (
        <ul className="art-list">
            {artObjects.map((artObject, index) =>
            <li key={index}>
                <ArtListItem artObject={artObject} baseUrl={baseUrl}></ArtListItem>
            </li>)}
        </ul>
    )
}

ArtList.propTypes ={
    artObjects: PropTypes.array,
    baseUrl: PropTypes.string
}

//export

export default ArtList