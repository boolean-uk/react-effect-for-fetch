import ArtListItem from "./ArtListItem"

function ArtList({artworks}){
    return(
        <ul className = "art-list">
            {artworks.map((artwork) => {
                return(
                   <ArtListItem key = {artwork.id} artwork = {artwork} />
                )
            })}
        </ul>
    )
}

export default ArtList