import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ artWork }) {
  return (
    <li>
      <div className="frame">
        <img src={artWork.imageURL} />
      </div>
      <h3>{artWork.title}</h3>
      <p>Artist: {artWork.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        <PublicationHistoryList
          publicationHistoryList={artWork.publicationHistory}
        />
      </ul>
    </li>
  );
}

export default ArtListItem;
