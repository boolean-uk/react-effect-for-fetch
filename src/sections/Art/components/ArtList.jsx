import ArtListItem from './ArtListItem'

export default function ArtList({ artworks }) {
    return (
        <>
            {artworks.map((artwork) => (
                <ArtListItem key={artwork.id} artwork={artwork} />
            ))}
        </>
    )
}
