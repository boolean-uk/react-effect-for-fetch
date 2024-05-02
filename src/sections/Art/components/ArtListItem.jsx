export default function ArtListItem ({item, index}) {
    return (
        <li key={index}>
        <div className="frame">
          <img src={`https://boolean-uk-api-server.fly.dev/${item.imageURL}`}/>
        </div>
        <h3>{item.title}</h3>
        <p>Artist: {item.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          <li>{item.publicationHistory[0]}</li>
          <li>{item.publicationHistory[1]}</li>
          <li>{item.publicationHistory[2]}</li>
        </ul>
      </li>
    )
}