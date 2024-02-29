import ArtPublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({data}) {
    const imageURL = data ? data.imageURL : "";
    const title = data ? data.title : "";
    const artist = data ? data.artist : "";
    const publicationHistory = data ? data.publicationHistory : [];
    return(<li>
        <div className="frame">
          <img
            src={"https://boolean-api-server.fly.dev/" + imageURL}
          />
        </div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <ArtPublicationHistoryList data={publicationHistory}/>
    </li>
    )
}

export default ArtListItem