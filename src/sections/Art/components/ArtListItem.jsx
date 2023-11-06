import SubjectList from "./SubjectList";

function ArtListItem({ art }) {
  return (
    // dummy data
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${
            art.image_id || "c36398f0-0033-74d1-5787-d033ef8cf990"
          }/full/843,/0/default.jpg`}
        />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {art.subject_titles.map((t, i) => (
          <SubjectList key={i} text={t} />
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;