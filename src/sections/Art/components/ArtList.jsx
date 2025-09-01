import ArtListItem from "./ArtListItem";

export default function ArtList({artList}) {

  return (
    <ul className="art-list">
      {artList.map((artwork, i) => (
        <ArtListItem artwork={artwork} key={i}/>
      ))}
    </ul>
  );
}
