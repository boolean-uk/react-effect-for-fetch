import ArtListItem from "./ArtListItem";

function ArtList({ arts }) {
  return (
    <ul className="art-list">
      {arts.map((art, index) => (
        <ArtListItem key={index} art={art} />
      ))}
    </ul>
  );
}

export default ArtList;
