import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({artListItem: { id, title, artist, imageURL, publicationHistory }
}) {
    return (
        <li>
            <div className="frame">
                <img src={`https://boolean-uk-api-server.fly.dev${imageURL}`} />
            </div>
            <h3>{title}</h3>
            <p>{artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList publicationHistoryList={publicationHistory}/>
        </li>
    )
}