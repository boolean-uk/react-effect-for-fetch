function ArtListItem({ artItemData }) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://boolean-api-server.fly.dev${artItemData.imageURL}`}
        />
      </div>
      <h3>{artItemData.title}</h3>
      <p>Artist: {artItemData.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {artItemData.publicationHistory.map((publicationItem, idx) => {
          return <li key={idx}>{publicationItem}</li>;
        })}
      </ul>
    </li>
  );
}
export default ArtListItem;
