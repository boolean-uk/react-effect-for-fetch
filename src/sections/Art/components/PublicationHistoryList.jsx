

const PublicationHistoryList = ({ publicationHistory }) => {
  return (
    <div>
      <h3>Publication History</h3>
      {publicationHistory ? (
        <ul>
          {publicationHistory.map((historyItem, index) => (
            <li key={index}>{historyItem}</li>
          ))}
        </ul>
      ) : (
        <p>No publication history available.</p>
      )}
    </div>
  );
};

export default PublicationHistoryList;
