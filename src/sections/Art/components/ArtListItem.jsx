
import PublicationHistoryList from "./PublicationHistoryList"


export default function ArtListItem(props) {

    const title = props.artListItem.title;
    const imageURL = props.artListItem.imageURL;
    const artist = props.artListItem.artist;
    const publicationHistory = props.artListItem.publicationHistory;


    return (
        <li>
        <div className="frame">
          <img
            src={`https://boolean-uk-api-server.fly.dev${imageURL}`}
          />
        </div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistory = {publicationHistory}/>
      </li>
      
    )
    
}