import PublicationHistory from "./PublicationHistoryList";
function ArtListItem(props) {
  return (
    <li key={props.index}>
      <div className="frame">
        <img src={`${props.url}${props.artData.imageURL}`} />
      </div>
      <h3>{props.artData.title}</h3>
      <p>Artist: {props.artData.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistory artData={props.artData} />
    </li>
  );
}

export default ArtListItem;
