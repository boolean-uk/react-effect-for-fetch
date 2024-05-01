import ArtListItem from "./ArtListItem";

export default function ArtList({ artists }) {
  return (
    <ul className="art-list">
      {artists.map((artist, i) => {
        return <ArtListItem key={i} artist={artist}/>;
      })}
    </ul>
  );
}
