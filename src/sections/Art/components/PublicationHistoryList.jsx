function PublicationHistoryList({ publicationHistory }) {
    return (
      <ul>
        {publicationHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
    );
  }
  
  export default PublicationHistoryList;
  
  

