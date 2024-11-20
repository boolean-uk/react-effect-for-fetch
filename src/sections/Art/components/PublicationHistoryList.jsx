


function PublicationHistoryList(props) {


    const {art} = props ?? {};

  return (

    <ul>
    {art.publicationHistory.map((publication , index) =>
    <li key={index}>{publication}</li>
    )}
    </ul>
    
  )
}

export default PublicationHistoryList
