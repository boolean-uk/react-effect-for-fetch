import PublicationHistoryList from "./PublicationHistoryList"
import "../../../App.css"

const ArtListItem = ({data}) => {
    return (
        <>
            <div className="frame">
                <img
                    src={`https://boolean-uk-api-server.fly.dev${data.imageURL}`}
                />
            </div>
            <h3>{data.title}</h3>
            <p>Artist: {data.artist}</p>
            <PublicationHistoryList publications = {data.publicationHistory} />
        </>        
    )
}

export default ArtListItem