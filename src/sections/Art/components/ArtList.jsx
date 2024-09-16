import ArtListItem from "./ArtListItem"
import PropTypes from "prop-types"

function ArtList(props) {
  return (
    <ul className="art-list">
        {props.arts.map((artItem, i) => (
            <ArtListItem key={i} artItem={artItem} URL={props.URL}/>
        ))}
    </ul>
  )
}

ArtList.propTypes = {
    arts: PropTypes.array.isRequired,
    URL: PropTypes.string.isRequired
}

export default ArtList
