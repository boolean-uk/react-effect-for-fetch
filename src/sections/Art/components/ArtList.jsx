import ArtListItem from "./ArtListItem";

function ArtList(props) {
  return (
    <ul className="art-list">
      {props.artworks.map((artwork) => (
        <ArtListItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
}

export default ArtList;
