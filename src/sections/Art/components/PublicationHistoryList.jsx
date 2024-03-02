
import PropTypes from 'prop-types'

function PublicationHistoryList({pubHistoryList}) {
  return (
    <ul>
        {pubHistoryList.map((item, index) => 
        <li key={index}>
            <p>{item}</p>
        </li>)}
    </ul>
  )
}

PublicationHistoryList.propTypes = {
    pubHistoryList: PropTypes.array
}

export default PublicationHistoryList
