import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItemComponent({ info, baseURL }) {
    return (
        <li>
        <div className="frame">
          <img src={baseURL + info.imageURL} />
        </div>
        <h3>{info.title} </h3>
        <p>Artist: {info.artist} </p>
        <h4>Publication History: </h4>
        <ul>
          {info.publicationHistory.map((item, index) => (
            <PublicationHistoryList key={index} description={item} />
          ))}
        </ul>
      </li>
    )
}

export default ArtListItemComponent