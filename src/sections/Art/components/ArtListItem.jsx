import SubjectList from "./SubjectList";

export default function ArtListItem ({artPiece}) {
  console.log(artPiece)
  return (
    <li>
      <div className="frame">
        <img
          // src={artPiece.thumbnail}
          alt={artPiece.thumbnail.alt_text}
        />
      </div>
      {/* TODO: replace */}
      <h3>{artPiece.title}</h3>
      <p>Artist: {"some artis"}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {/* TODO: replace */}
        <SubjectList subjects={["subject1", "subject2"]}/>
      </ul>
    </li>
  )
}