function ArtListItem({title, artist_title, image_id}) {
    return (
            <li>
            <div className="frame">
                <img
                    src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist_title}</p>
            <h4>Artistic Subjects:</h4>
            
        </li>
    )
  }

  export default ArtListItem
