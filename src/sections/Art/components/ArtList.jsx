import ArtListItem from "./ArtListItem";

export default function ArtList({ artworkList }) {
  return (
    <>
      <ul className="art-list">
        {artworkList.map((artwork, index) => (
          <ArtListItem artwork={artwork} key={index} />
        ))}
      </ul>
    </>
  );
}
