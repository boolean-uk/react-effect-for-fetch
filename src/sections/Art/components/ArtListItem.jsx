import PublicationHistoryList from "./PublicationHistoryList"

const ArtListItem = (props) => {

    return (
        <li style={{listStyleType: "none"}} id={props.index}>
            <div className="frame">
                <img
                    src={`${props.baseURL}${props.artwork.imageURL}`}
                />
            </div>
            <h3>{props.artwork.title}</h3>
            <p>{props.artwork.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList artwork={props.artwork}/>
      </li>
    )
}

export default ArtListItem