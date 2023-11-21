import SubjectList from "./SubjectList";

const ArtListItem = ({ artPiece }) => {
  const { image_id, title, artist_title } = artPiece;

  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        <SubjectList artPiece={artPiece} />
      </ul>
    </li>
  );
};
export default ArtListItem;
