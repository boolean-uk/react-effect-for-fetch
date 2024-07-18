import ArtListItem from "./ArtListItem";
export default function ArtList(props) {
  return (
    <ul className="art-list">
      {props.pics.map((index) => {
        return <ArtListItem key={index.id} index={index} />;
      })}
    </ul>
  );
}
