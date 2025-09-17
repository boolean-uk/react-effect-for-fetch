import ArtListItem from "./ArtListItem.jsx";

function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.map((artwork) => (
        <ArtListItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
}

export default ArtList;
