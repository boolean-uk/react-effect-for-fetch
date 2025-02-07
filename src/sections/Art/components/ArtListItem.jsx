import "../../../App.css";
import PublicationHistoryList from "./PublicationHistoryList";


const ArtListItem = ({artData}) => {

    const imageURL = "https://boolean-uk-api-server.fly.dev" + artData.imageURL;

    return(
        <>
            <div className="frame">
                <img
                    src={imageURL}
                />
                <h3>{artData.title}</h3>
                <p>Artist: {artData.artist}</p>
                <PublicationHistoryList publicationData={artData.publicationHistory} />
            </div>
        </>
    )

}

export default ArtListItem