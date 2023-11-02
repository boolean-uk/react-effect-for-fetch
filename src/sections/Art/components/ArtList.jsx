import ArtListItem from "./ArtListItem"

function ArtList({ artworks }) {

    return (
        <ul className="art-list">
          {artworks.map((artwork, index) => 
          <ArtListItem key={`${artwork.title}-${index}`} artwork={artwork} />
          )}
        </ul>
    )
}

export default ArtList