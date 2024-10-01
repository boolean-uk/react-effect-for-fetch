import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({ art }) {
  return (
    <div className='art-item'>
      <img
        src={`https://boolean-uk-api-server.fly.dev/${art.imageURL}`}
        alt={art.title}
        className='art-image'
      />
      <h3>{art.title}</h3>
      <p>{art.artist}</p>
      <PublicationHistoryList history={art.publicationHistory} />
    </div>
  )
}

export default ArtListItem