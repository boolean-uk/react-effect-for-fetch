import ArtListItem from "./ArtListItem";

function ArtList({ art }) {
  return (
    <ul className="art-list">
      {art.map((painting, index) => (
        <ArtListItem key={index} painting={painting} />
      ))}
    </ul>
  );
}

export default ArtList;
