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

//1. import the li component from my template file

//2. create a function to fetch data from the ART API based on the parameters I need e.g (Artist name, Artwork title)

//3. populate the text fields based on the data from the API e.g (Artist name, Artwork title)

//4. export the component to be used in the ArtList.jsx file