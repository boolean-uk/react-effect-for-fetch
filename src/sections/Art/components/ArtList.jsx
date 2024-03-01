import ArtListItem from "./ArtListItem"

function ArtList(props) {
    const artworks = props.artworks

    return(
        <ul className="art-list">
        {artworks.length !== 0 && 
        artworks.map((art, index) => 
          (
            <ArtListItem key ={index} art={art} />
          )
        )}
      </ul>
    )
}

export default ArtList