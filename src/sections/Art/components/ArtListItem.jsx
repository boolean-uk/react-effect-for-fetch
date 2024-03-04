import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem(props) {
  return (
    <>
      <div className="frame">
        <img src={`${props.baseURL}${props.art.imageURL}`} />
      </div>
      <h3>{props.art.title}</h3>
      <p>{`Artist: ${props.art.artist}`}</p>
      <h4>Publication History</h4>
      <PublicationHistoryList publicationHistory={props.art.publicationHistory} />
    </>
  )
}

export default ArtListItem