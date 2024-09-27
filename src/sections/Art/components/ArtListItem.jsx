import PublicationHistoryList from "./PublicationHistoryList";

const ArtListItem = ({ artwork }) => {
  return (
    <li key={artwork.id}>
      <div className="frame">
        <img src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`} />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        <PublicationHistoryList publications={artwork.publicationHistory} />
      </ul>
    </li>
  );
};

export default ArtListItem;
