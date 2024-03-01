import PropTypes from "prop-types"
import PublicationHistoryList from "./PublicationHistoryList"

const URL = "https://boolean-api-server.fly.dev"

function ArtListItem(props) {
  const artItem = props.artItem
  return (
    <li>
        <div className="frame">
            <img src={URL + artItem.imageURL}></img>
        </div>
        <h3>{artItem.title}</h3>
        <p>Artist: {artItem.artist}</p>
        <h4>Publication History:</h4>
        <ul>
            <PublicationHistoryList artItem={artItem} />
        </ul>
    </li>
  )
}

ArtListItem.propTypes = {
    URL: PropTypes.string.isRequired,
    artItem: PropTypes.object.isRequired
}

export default ArtListItem