import ArtListItem from "./ArtListItem";

function ArtList({ data }) {
  return (
    <ul className="art-list">
      {data.map((element, ind) => {
        return <ArtListItem key={ind} data={element} />;
      })}
    </ul>
  );
}

export default ArtList;
