import ArtListItem from "./ArtListItem";

export default function ArtList({ arts }) {
  return (
    <ul className="art-list">
      {arts &&
        arts.length > 0 &&
        arts.map((art) => <ArtListItem key={art.id} art={art} />)}
    </ul>
  );
}