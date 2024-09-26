import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem(props) {
  return (
    <li>
      <div className="frame">
        <img
          src={"https://boolean-api-server.fly.dev" + props.painting.imageURL}
        />
      </div>
      <h3>{props.painting.title}</h3>
      <p>{"Artist: " + props.painting.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList painting={props.painting} />
    </li>
  );
}

export default ArtListItem;
