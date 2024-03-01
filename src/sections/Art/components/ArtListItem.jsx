import PublicationHistory from "./PublicationHistoryList"

function ArtListItem(props) {
    const art = props.art

    return(
    <li>
        <div className="frame">
            <img src={`https://boolean-api-server.fly.dev/${art.imageURL}`} />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication history:</h4>
            <ul>
            {art.publicationHistory.map((publication, index) => (
                <PublicationHistory key={index} publication={publication} />
            ))}
            </ul>
    </li>
    )
}

export default ArtListItem