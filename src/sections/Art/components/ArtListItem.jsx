import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem(props) {
  return (
    <li className="art-item">
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${props.art.imageURL}`} />
      </div>
      <h3>{props.art.title}</h3>
      <p>{props.art.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {props.art.publicationHistory.map((publication, index) => (
          <PublicationHistoryList key={index} publication={publication} />
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
