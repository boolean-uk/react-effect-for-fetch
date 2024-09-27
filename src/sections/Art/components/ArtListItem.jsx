import PublicationHistory from "./PublicationHistoryList"

function ArtListItem({art}) {

    return (
        <li key={art.id}>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${art.imageURL}`}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <PublicationHistory publicationHistory={art.publicationHistory} />
            </li>
    )
}

export default ArtListItem