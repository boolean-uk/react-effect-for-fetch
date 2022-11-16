import SubjectList from "./SubjectList";

function ArtListItem({ art }) {
  return (
    <li key={art.id}>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt=""
        />
      </div>
      <h3>{art.title} </h3>
      <p>Artist:{art.artist_title}</p>
      <h4>Artistic Subjects:</h4>

      <SubjectList artClassifying={art.classification_titles} art={art} />
    </li>
  );
}

export default ArtListItem;
