import ArtListItem from "./ArtListItem";

function ArtList({ artic }) {
    return (
        <ul className="art-list">
            <ArtListItem
            artic={artic}
            />

            
        </ul>
    )
}
export default ArtList