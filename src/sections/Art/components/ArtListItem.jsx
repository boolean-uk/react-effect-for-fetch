import PublicationHistory from "./PublicationHistoryList"

function ArtListItem({art, index}){
    return (
        <li key={index}>
        <div className="frame">
            <img src={`https://boolean-api-server.fly.dev${art.imageURL}`} />
        </div>
        <p><strong>Title </strong>{art.title}</p>
        <p><strong>Artist </strong>{art.artist}</p>
        <p><strong>Publication history </strong> </p>
        {art.publicationHistory.map((publication, index) => (
            <PublicationHistory publication={publication} index={index} />
        ))}
      </li>
    )
}

export default ArtListItem