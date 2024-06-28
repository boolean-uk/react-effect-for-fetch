import ArtListItem from './ArtListItem'

export default function ArtList({ artData }) {
  return (
    <ul className="art-list">
      {artData.map((artItem, index) => (
        <ArtListItem key={index} artItem = {artItem} index={index}/>
      ))}
    </ul>
  );
}
