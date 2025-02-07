import ArtListItem from "./ArtListItem"

const ArtList = (props) => {

    return (
        <ul>
            {props.artworkList.map((artwork, index) => {
                return (
                    <ArtListItem artwork={artwork} key={index} index={index} baseURL={props.baseURL} />
                )
            })}
        </ul>
    )
}

export default ArtList