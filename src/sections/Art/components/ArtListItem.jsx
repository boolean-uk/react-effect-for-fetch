import PublicationHistory from "./PublicationHistoryList";

function ArtListItem({ art }) {
  return (
    <li style={{ border: `2px solid ${art.frameColor}` }}>
      <div className="frame">
        <img
          src={`https://boolean-api-server.fly.dev/${art.imageURL}`}
          alt={art.title}
        />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistory publicationHistory={art.publicationHistory} />
    </li>
  );
}

export default ArtListItem;