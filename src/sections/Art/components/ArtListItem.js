function ArtListItem(props) {
    return (
        <>
        <div class="frame">
          <img
            src={`https://www.artic.edu/iiif/2/${props.artwork.image_id}/full/843,/0/default.jpg`} alt={props.artwork.title}
          />
        </div>
        <h3>{props.artwork.title}</h3>
        <p>Artist: {props.artwork.artist_title}</p>
        </>
    )
}
export default ArtListItem