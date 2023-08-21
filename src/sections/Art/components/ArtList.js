import ArtListItem from "./ArtListItem"
import SubjectList from "./SubjectList"

function ArtList(props) {
    if (!props.artworks) {
        return null
    }
    return (
        <ul class="art-list">
            {props.artworks.map((artwork) => (
            <li key={artwork.id}>
                <ArtListItem artwork={artwork}/>
                <SubjectList artwork={artwork}/>
            </li>
            ))}
        </ul>
    )
}
export default ArtList