import PublicationHistoryList from "./PublicationHistoryList"

const ArtListItem = ({entry, baseURL}) => {

    return (
        <>
          <div className="frame">
            <img src={baseURL+entry.imageURL}/>
          </div>
          <h3>{entry.title}</h3>
          <p>{"Artist: " + entry.artist}</p>
          <h4>Publication History:</h4>
          <PublicationHistoryList publicationHistory={entry.publicationHistory} />
        </>
      )
}

export default ArtListItem