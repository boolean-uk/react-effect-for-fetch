import SubjectList from "./SubjectList"

function ArtListItem(props) {
    return (
        <li>
            <div className="frame">
                <img src={props.artwork.imgUrl} />
            </div>
            <h3>{props.artwork.title}</h3>
            <p>{props.artwork.artist_display}</p>
            <h4>Artistic Subjects:</h4>
            <SubjectList artwork={props.artwork}/>
        </li>
    )
}

export default ArtListItem