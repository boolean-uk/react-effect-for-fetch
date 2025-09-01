import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem( { art, index } ){

  return(
    <>
      <li key={ index }>
        <div className="frame">
          <img
            src={ art.imageURL }
          />
        </div>
        <h3>{ art.title }</h3>
        <p>Artist: { art.artist }</p>
        <h4>Publication History:</h4>
        <ul>
          { art.publicationHistory.map((pub, index) => (
            <PublicationHistoryList pub={ pub } index={ index } />
          ))}
        </ul>
      </li>
    </>
  )
}
