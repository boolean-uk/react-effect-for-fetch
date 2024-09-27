export default function ArtListItem({ artwork, index }) {
  return (
    <>
      <li key={index}>
        <div className="frame">
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          />
        </div>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artist_title}</p>
        <h4>Artistic Subjects:</h4>
        <ul>
          {" "}
          {artwork.subject_titles.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </li>
    </>
  );
}
