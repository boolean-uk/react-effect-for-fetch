import ArtListItem from "./ArtListItem";

const Artlist = ({ artworks }) => {
  return (
    <div className="scroll-container">
      <ul className="art-list">
        {artworks.map((artwork) => (
          <ArtListItem artwork={artwork} key={artwork.id} />
        ))}
      </ul>
    </div>
  );
};

export default Artlist;
