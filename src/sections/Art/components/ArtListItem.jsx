import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem({item, index, URL}){
    return(
        <li key = {index}>
        <div className="frame">
          <img src={`${URL}${item.imageURL}`}/>
        </div>
        <h3>{item.title}</h3>
        <p>Artist: {item.artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistory={item.publicationHistory}/>
      </li>
    )
}

export default ArtListItem