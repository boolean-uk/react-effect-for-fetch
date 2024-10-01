import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({
    artListItem: { artist, title, publicationHistory, imageURL }

    
  }) {
    imageURL='https://boolean-uk-api-server.fly.dev'+imageURL
    return (
        <li>
            <div className="frame">
                <img
                    src={imageURL}
                />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <div><PublicationHistoryList publicationHistory={publicationHistory}/></div>
            
      </li>
    );
}