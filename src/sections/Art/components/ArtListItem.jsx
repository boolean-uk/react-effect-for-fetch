import SubjectList from "./SubjectList";

const ArtListItem = ({ art: { image_id, name, title, style_titles } }) => {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
        />
      </div>
      <h3>{title}</h3>
      <p>Artist: {name || "Anonymous"}</p>
      <SubjectList style_titles={style_titles} />
    </li>
  );
};

export default ArtListItem;
