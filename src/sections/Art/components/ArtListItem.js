import SubjectList from "./SubjectList";

function ArtListItem(props){

console.log("this is props listItem", props)
    return(
        <li key={props.index}>
              <div className="frame">
                <img src={`https://www.artic.edu/iiif/2/${props.artwork.image_id}/full/843,/0/default.jpg`} alt={props.artwork.title} />
              </div>
              <h3>{props.artwork.title}</h3>
              <p>{props.artwork.artist_title}</p>
              <h4>Artistic Subjects</h4>
              <ul>
              {props.artwork.term_titles.map((subject, index) => (
                  <SubjectList subject={subject} index={index} />
                ))}
              </ul>
        </li>
    )
}

export default ArtListItem;