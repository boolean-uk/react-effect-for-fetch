import ArtListItem from "./ArtListItem";

function ArtList({ artList }) {
  return (
    <>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artList.map((artItem, key) => {
            return <ArtListItem key={key} art={artItem} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default ArtList;
