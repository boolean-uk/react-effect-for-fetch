import ArtListItem from "./ArtListItem";
function ArtList({ artData }) {

  return (
    <ul className="art-list">
      {artData.map((art, index) => {
        return <ArtListItem key={index} artInfo={art} />;
      })}
    </ul>
  );
}

export default ArtList;
