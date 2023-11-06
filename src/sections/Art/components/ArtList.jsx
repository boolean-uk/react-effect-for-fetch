import ArtListItem from "./ArtListItem";

function ArtList({ artList }) {
  return (
    <ul className="art-list">
      {artList.map((aL) => (
        <ArtListItem key={aL.id} art={aL} />
      ))}
    </ul>
  );
}

export default ArtList;