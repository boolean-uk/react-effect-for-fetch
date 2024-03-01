import PublicationHistoryList from "./PublicationHistoryList"
function ArtListItem ({ title, artist, imageURL, publicationHistory}) {
    return(
        <div>
          <li>
            <div className="frame">
              <img
                src={`https://boolean-api-server.fly.dev/${imageURL}`}
              />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList publicationHistory={publicationHistory}/>
          </li>
        </div>
    )
}

export default ArtListItem