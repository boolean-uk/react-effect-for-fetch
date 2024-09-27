import ArtListItem from "./ArtListItem";
import PublicationHistory from "./PublicationHistoryList";
function ArtList({ artData }) {
  return (
    <ul className="art-list">
      {artData && artData.length > 0 ? (
        artData.map((artPiece) => (
          <li key={artPiece.id}>
            <ArtListItem artPiece={artPiece} />
            <PublicationHistory artPiece={artPiece} />
          </li>
        ))
      ) : (
        <li>No art data available</li>
      )}
    </ul>
  );
}

export default ArtList;
