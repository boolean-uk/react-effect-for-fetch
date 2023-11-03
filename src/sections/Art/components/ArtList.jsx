import ArtListItem from "./ArtListItem";

export default function ArtList ({artArr}) {
  return (
    <ul className="art-list">
      {artArr.map((artPiece, index) => <ArtListItem key={index} artPiece={artPiece}/>)}
    </ul>
  )
}