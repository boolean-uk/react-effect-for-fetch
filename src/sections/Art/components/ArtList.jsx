import ArtListItem from "./ArtListItem";

export default function ArtList({ artData, artConfig }) {
  return (
    <ul className="art-list">
      {artData.map((item, index) => (
        <ArtListItem
          key={`art-item-${index}`}
          item={item}
          artConfig={artConfig}
        />
      ))}
    </ul>
  );
}
