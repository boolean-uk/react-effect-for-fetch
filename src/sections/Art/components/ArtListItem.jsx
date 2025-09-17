
import PublicationHistoryList from './PublicationHistoryList'


function ArtListItem({imageURL, title, artist, publicationHistory}) {
    return(
        <>
        <li>
         <div className="frame">
              <img
                src={`https://boolean-uk-api-server.fly.dev/${imageURL}`}
              />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <ul>
                <PublicationHistoryList 
                publications={publicationHistory}/>
            </ul>
            </li>
        </>
    ) 
}
export default ArtListItem;