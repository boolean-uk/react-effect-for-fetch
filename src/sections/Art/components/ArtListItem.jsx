import SubjectList from "./SubjectList";

export default function ArtListItem ({artPiece}) {
  console.log(artPiece.artist_title)
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`}
          alt={artPiece.thumbnail.alt_text}
          height="200px"
        />
      </div>
      {/* TODO: replace */}
      <h3>{artPiece.title}</h3>
      <p>Artist: {(artPiece.artist_title || "Unknown")}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {/* TODO: replace */}
        <SubjectList subjects={artPiece.subject_titles}/>
      </ul>
    </li>
  )
}