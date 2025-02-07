import PublicationHistory from "./PublicationHistoryList"
function ArtListItem(props) {
    return (
        <li>
            <div className="frame">
                <img
                    src={"https://boolean-uk-api-server.fly.dev/" + props.art.imageURL}
                />
            </div>
            <h3>{props.art.title}</h3>
            <p>{props.art.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {props.art.publicationHistory.map(pub => <PublicationHistory pub={pub}/>)}
            </ul>
        </li>
    )
}

export default ArtListItem