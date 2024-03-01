import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem(props) {
  return (
    <li>
      <div className="frame">
        <img src={`${props.baseUrl}${props.image.imageURL}`} />
      </div>
      <h3>{props.image.title}</h3>
      <p>Artist: {props.image.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList image={props.image} />
    </li>
  );
}

export default ArtListItem;
