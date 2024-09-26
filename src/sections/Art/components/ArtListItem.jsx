import PublicationHistoryList from "./PublicationHistoryList"

const imageHTML = "https://boolean-api-server.fly.dev/"

function ArtListItem(props) {
    return (
        <li key={props.art.id}>
                    <div className="frame">
                        <img src={imageHTML+props.art.imageURL}/>    
                    </div>
                    <h3>{props.art.title}</h3>
                    <p>{props.art.artist}</p>
                    <PublicationHistoryList art={props.art}/>
                </li>
    )
}

export default ArtListItem