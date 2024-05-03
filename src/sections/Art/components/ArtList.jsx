import ArtListItem from "./ArtListItem";

function ArtList({ artWorks }) {
  return (
    <ul className="art-list">
      {artWorks.map((artWork, index) => (
        <ArtListItem key={index} artWork={artWork} />
      ))}
    </ul>
  );
}

export default ArtList;
