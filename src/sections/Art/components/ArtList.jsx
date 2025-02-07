import ArtListItem from "./ArtListItem";

function ArtList({ itemList }) {
  return (
    <ul className="art-list">
      {itemList.map((item, index) => {
        return <ArtListItem key={index} item={item} />;
      })}
    </ul>
  );
}

export default ArtList;
