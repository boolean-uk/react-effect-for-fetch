function PublicationHistoryList({ publicationHistory }) {
  return (
    <div>
      <h4>Publication History:</h4>
      <ul>
        {publicationHistory.map((history, idx) => (
          <li key={idx}>{history}</li>
        ))}
      </ul>
    </div>
  );
}

export default PublicationHistoryList;
