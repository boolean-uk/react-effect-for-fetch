import SubjectList from "./SubjectList";

export default function ArtListItem ({artPiece}) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`}
          alt={artPiece.thumbnail.alt_text}
          height="200px"
        />
      </div>
      <h3>{artPiece.title}</h3>
      <p>Artist: {(artPiece.artist_title || "Unknown")}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        <SubjectList subjects={artPiece.subject_titles}/>
      </ul>
    </li>
  )
}