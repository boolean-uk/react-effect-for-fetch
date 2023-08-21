import SubjectList from "./SubjectList";

function ArtListItem(props) {
    return (
        <li key={props.index}>
            <div class="frame">
                <img
                    src={`https://www.artic.edu/iiif/2/${props.artItem.image_id}/full/843,/0/default.jpg`}
                    alt="art"
                />
            </div>
            <h3>{props.artItem.title}</h3>
            <p>Artist: {props.artItem.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <SubjectList subjects={props.artItem.subject_titles} />
        </li>
    );
}

export default ArtListItem;
