import PublicationHistoryList from "./PublicationHistoryList";
function ArtListItem({ artInfo }) {
  return (
    <li>
      <div className="frame">
        <img src={"https://boolean-api-server.fly.dev/" + artInfo.imageURL} />
      </div>
      <h3>{artInfo.title}</h3>
      <p>{artInfo.artist}</p>
      <h4>Publication History:</h4>
      <ul>
      {artInfo.publicationHistory.map((history, index) => {
        return <PublicationHistoryList key={index} history={history} />;
      })}
      </ul>
    </li>
  );
}

export default ArtListItem;
