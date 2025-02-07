
const PublicationHistoryList = (props) => {

    return (
        <ul>
          <li>{props.artwork.publicationHistory[0]}</li>
          <li>{props.artwork.publicationHistory[1]}</li>
          <li>{props.artwork.publicationHistory[2]}</li>
        </ul>
    )
}

export default PublicationHistoryList