import PublicationHistoryList from "./PublicationHistoryList";

const ArtListItem = ({ art }) => {
  return (
    <div className="art-list-item">
      <h2>{art.title}</h2>
      <p>{art.artist}</p>
      <img
        src={`https://boolean-uk-api-server.fly.dev/${art.imageURL}`}
        alt={art.title}
      />
      <PublicationHistoryList histories={art.publicationHistory} />
    </div>
  );
};

export default ArtListItem;
