import SubjectList from "./SubjectList";

function ArtListItem({ art }) {
  return art.map((artData, index) => {
    return (
      <li key={index}>
        <div className="frame">
          <img
            src={`https://www.artic.edu/iiif/2/${artData.image_id}/full/843,/0/default.jpg`}
          />
        </div>
        <h3>{`${artData.title}`}</h3>
        <p>{`Artist : ${artData.artist_display}`}</p>
        <h4>Artistic Subjects:</h4>
        <SubjectList artData={artData}/>
      </li>
    );
  });
}
export default ArtListItem;
