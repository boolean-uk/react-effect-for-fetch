import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art, index }) {
  const url = "https://boolean-uk-api-server.fly.dev";

  return (
    <li key={index}>
      <div className="frame">
        <img src={`${url}${art.imageURL}`} />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <PublicationHistoryList publicationHistory={art.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
