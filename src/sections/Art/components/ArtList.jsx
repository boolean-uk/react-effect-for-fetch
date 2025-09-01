import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
    return (
        <ul className="art-list">
            {artworks.map((art) => (
                <ArtListItem key={art.id} art={art} />
            ))}
        </ul>
    );
}

export default ArtList;
