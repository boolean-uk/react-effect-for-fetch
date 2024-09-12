import ArtListItem from "./ArtListItem";

function ArtList({ data }) {
    return (
      <ul className="art-list">
        {data.map((item, index) => (
          <ArtListItem key={index} item={item} />
        ))}
      </ul>
    );
}

export default ArtList