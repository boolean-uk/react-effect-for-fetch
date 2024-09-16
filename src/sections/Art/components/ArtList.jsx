import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <ArtListItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
}

export default ArtList;
