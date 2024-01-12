const PublicationHistoryList = ({ publicationHistory }) => {
  if (publicationHistory && publicationHistory.length > 0) {
    return (
      <>
        <h3>Publication History</h3>
        <ul>
          {publicationHistory.map((historyItem, index) => (
            <li key={`History-item-${index}`}>{historyItem}</li>
          ))}
        </ul>
      </>
    );
  }

  // Handle case where publicationHistory is empty
  return (
    <>
      <h3>No Publication History Available</h3>
    </>
  );
};

export default PublicationHistoryList;
