function PublicationHistoryList({ publicationHistory }) {
  return (
    <div>
      <h4>Publication History:</h4>
      <ul>
        {publicationHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PublicationHistoryList;
