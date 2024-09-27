import ArtListItem from "./ArtListItem";

function ArtList({ artData }) {
  //   console.log("rendering artlist with", artData);

  return (
    <ul className="art-list">
      {artData.map((artItemData, idx) => (
        <ArtListItem key={idx} artItemData={artItemData} />
      ))}
    </ul>
  );
}

export default ArtList;
