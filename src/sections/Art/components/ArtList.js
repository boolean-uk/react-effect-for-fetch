import ArtListItem from "./ArtListItem";

function ArtList({ artData }) {
  return (
    <ul className="art-list">
      {artData.map((art) => {
        return <ArtListItem key={art.id} artData={artData} art={art} />;
      })}
    </ul>
  );
}

export default ArtList;
