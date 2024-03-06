import PublicationHistoryList from "./PublicationHistoryList"


function ArtListItem( {art} ) {

    return (
        <li>
        <div className="frame">
          <img
            src={"https://boolean-api-server.fly.dev/" + art.imageURL}
          />
        </div>
        <h3>{art.title}</h3>
        <p>{art.artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList pubhis={art.publicationHistory}/>
      </li>
    )
}

export default ArtListItem