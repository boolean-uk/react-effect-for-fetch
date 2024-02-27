import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ artwork }) {
  return (
    <li>
      <img
        src={`https://boolean-api-server.fly.dev/${artwork.imageURL}`}
        alt={artwork.title}
      />
      <h2>{artwork.title}</h2>
      <p>{artwork.artist}</p>
      <PublicationHistoryList history={artwork.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
