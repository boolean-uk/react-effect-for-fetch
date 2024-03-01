function PublicationHistoryList({ publicationHistory }) {
    // Checking if publicationHistory is undefined or not an array
    if (!publicationHistory || !Array.isArray(publicationHistory)) {
      return <p>No publication history available.</p>;
    }
  
    return (
      <ul>
        {publicationHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default PublicationHistoryList;
  