function PublicationHistoryList({publicationHistory}){
    return(
        <ul>
        {    
          publicationHistory.map((history, index) => {
            return (
              <li key = {index}>{history}</li>
            )
          })              
        }
      </ul>
    )
}


export default PublicationHistoryList