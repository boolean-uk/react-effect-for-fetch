import PublicationHistoryList from "./PublicationHistoryList";

const ArtListItem = ({imageURL, title, artist, pubHistory}) => {

    return (
        <div>
            <div className="frame">
                <img src={imageURL} />
            </div>  
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication history:</h4>
            <PublicationHistoryList data={pubHistory}/>
        </div>
    )
}

export default ArtListItem;