import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem(props) {
    const { art, base_url} = props
  return (
    <>
        <li>
            <div className="frame">
                <img src={base_url + art.imageURL} />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <PublicationHistoryList publicationHistory={art.publicationHistory} />
        </li>
    </>
  )
}

export default ArtListItem