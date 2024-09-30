
function ArtListItem({item}, key) {
    const url = "https://boolean-uk-api-server.fly.dev"
    
    return (
        <li key={key}>
          <div className="frame">
            <img
              src={`${url}${item.imageURL}`}
            />
          </div>
          <h3>{item.title}</h3>
          <p>Artist: {item.artist}</p>
          <h4>Publication History:</h4>
          <ul>
            {item.publicationHistory.map((publication, index) => (
              <li key={index}>
                {publication}
              </li>
            ))}
          </ul>
        </li>
    )
}

export default ArtListItem