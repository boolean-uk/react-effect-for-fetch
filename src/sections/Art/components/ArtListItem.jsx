import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem(props) {
  const artItem = props.artItem;
  const publicationList = props.artItem.publicationHistory;
  const imageURL = props.artItem.imageURL;

  return (
    <>
      <li>
        <div className="frame">
          <img src={`https://boolean-uk-api-server.fly.dev${imageURL}`} />
        </div>
        <h3>{artItem.title}</h3>
        <p>Artist: {artItem.artist}</p>
        <h4>Publication History:</h4>

        <PublicationHistoryList publicationList={publicationList} />
      </li>
    </>
  );
}

export default ArtListItem;
