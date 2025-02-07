import PublicationHistory from "./PublicationHistoryList";

function ArtListItem({ artwork }) {
    return (
        <li key={artwork.id}>
            <div className="frame">
                <img
                    src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`}
                />
            </div>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <PublicationHistory publicationHistory={artwork.publicationHistory}/>
        </li>
    );
}

export default ArtListItem;
