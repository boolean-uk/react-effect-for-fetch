import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ artItem, index }) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${artItem.imageURL}`} />
      </div>
      <h3>{artItem.title}</h3>
      <p>{artItem.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {artItem.publicationHistory.map((publication, index) => (
          <PublicationHistoryList key={index} publication={publication} />
        ))}
      </ul>
    </li>
  );
}
