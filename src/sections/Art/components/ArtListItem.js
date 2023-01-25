import SubjectList from "./SubjectList"
export default function ArtListItem(props) {
    return (
        <li key={props.i}>
        <div className="frame">
            <img
                src={`https://www.artic.edu/iiif/2/${props.artwork.image_id}/full/843,/0/default.jpg`}
                alt={props.artwork.title}
            />
        </div>
        <h3>{props.artwork.title}</h3>
        <p>Artist: {props.artwork.artist_title}</p>
        <h4>Artistic Subjects:</h4>
        <ul>
            {props.artwork.subject_titles.map((subjects, i)=> {
                return <SubjectList subjects={subjects} key={i}/>
            })}
        </ul>
    </li> 
    )
}