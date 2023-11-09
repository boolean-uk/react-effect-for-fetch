import SubjectList from "./SubjectList";

const ArtListItem = ({ list }) => {
  return (
    <li>
      <div className='frame'>
        <img
          src={`https://www.artic.edu/iiif/2/${list.image_id}/full/843,/0/default.jpg
          `}
        />
      </div>
      <h3>{list.title}</h3>
      <p>Artist: {list.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {list.subject_titles.map((text, id) => (
          <SubjectList key={id} text={text} />
        ))}
      </ul>
    </li>
  );
};

export default ArtListItem;
