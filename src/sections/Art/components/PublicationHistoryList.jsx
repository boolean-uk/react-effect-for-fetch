import PropTypes from "prop-types"

function PublicationHistoryList(props) {
  return (
    <ul>
        {props.artItem.publicationHistory.map((history, i) => (
            <li key={i}>{history}</li>
        ))}
    </ul>
  )
}

PublicationHistoryList.propTypes = {
    artItem: PropTypes.object.isRequired
}

export default PublicationHistoryList