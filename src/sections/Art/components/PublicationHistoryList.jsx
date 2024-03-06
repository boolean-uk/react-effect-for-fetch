import PublicationHistoryLine from "./PublicationHistoryLine"

function PublicationHistoryList( { pubhis } ) {
    return (
        <ul>
          {pubhis.map((line, index) => (
                <PublicationHistoryLine key={index} line={line} />
          ))}  
        </ul>
    )
}

export default PublicationHistoryList
