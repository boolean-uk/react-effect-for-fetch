function PublicationHistoryList({ publicationHistory }) {
    return (
      <>
        <ul>
            {publicationHistory.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
      </>
    )
  }
  
  export default PublicationHistoryList;
  