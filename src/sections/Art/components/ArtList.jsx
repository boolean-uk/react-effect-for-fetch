import ArtListItem from "./ArtListItem";

export default function ArtList({ artworks }) {
    return (
        <ul className="art-list">
            {artworks.map((artwork) => (
                <ArtListItem key={artwork.id} artwork={artwork} />
            ))}
        </ul>
    );
}