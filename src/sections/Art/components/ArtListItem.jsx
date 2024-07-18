import PublicationHistory from "./PublicationHistoryList";

export default function ArtListItem({ index }) {
  return (
    <li>
      <div className="frame">
        <img src={"https://boolean-api-server.fly.dev" + index.imageURL} />
      </div>
      <h3>{index.title}</h3>
      <p>Artist: {index.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistory index={index} />
    </li>
  );
}
