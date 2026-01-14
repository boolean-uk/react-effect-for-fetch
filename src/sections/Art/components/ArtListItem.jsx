function ArtListItem({key, artwork}) {

  return (
    <li key={key}>
        <div className="frame">
            <img src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`}/>
        </div>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artist}</p>
        <h4>Publication History:</h4>
        <ul>
        {artwork.publicationHistory.map((publication, index) => (
            <li key={index}>{publication}</li>))}
        </ul>
    </li>
  )}

export default ArtListItem