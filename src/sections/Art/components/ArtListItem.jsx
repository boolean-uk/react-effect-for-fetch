import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({Artwork}) {
    return (
        <>
            <li>
                <div className="frame">
                    <img src={`https://boolean-uk-api-server.fly.dev/${Artwork.imageURL}`} />
                </div>
                <h3>{Artwork.title}</h3>
                <p>{Artwork.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                    {Artwork.publicationHistory.map((publicationHistory, pubIndex) => (
                        <PublicationHistoryList key={pubIndex} PublicationHistory={publicationHistory} />
                    ))}
                </ul>
            </li>
        </>
    );
}

export default ArtListItem;