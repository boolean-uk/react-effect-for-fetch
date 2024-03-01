import PublicationHistoryList from "./PublicationHistoryList.jsx";

function ArtListItem(props) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${props.item.imageURL}`} />
      </div>
      <h3>{props.item.title}</h3>
      <p>{props.item.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {props.item.publicationHistory.map((history, index) => {
          <PublicationHistoryList history={history} index={index} />;
        })}
      </ul>
    </li>
  );
}

export default ArtListItem;
