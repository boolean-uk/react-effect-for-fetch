import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({artListItem : {imageURL, title, artist, publicationHistory}}){

  const actualImage = "https://boolean-uk-api-server.fly.dev"
    return (<>
    <li>
        <div className="frame">
          <img src={actualImage.concat(imageURL)}
          />
        </div>
        <h3>{title}</h3>
        <p>{artist}</p>
        <h4>Publication History</h4>
        <ul>
        <PublicationHistoryList publicationHistory={publicationHistory}/>

        </ul>
    </li>
 </> ) 
}


export default ArtListItem;