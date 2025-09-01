import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({artwork}) {
    return (
            <li>
                <div className="frame">
                <img
                    src={"https://boolean-uk-api-server.fly.dev" + artwork.imageURL}
                />
                </div>
                <h3>{artwork.title}</h3>
                <p>Artist: {artwork.artist}</p>
                <h4>Publication History:</h4>
                <PublicationHistoryList publications={artwork.publicationHistory}/>
          </li>
    );
}