function PublicationHistory({ publicationHistory }) {
  return (
    <ul>
      {publicationHistory.map((historyItem, index) => (
        <li key={index}>{historyItem}</li>
      ))}
    </ul>
  );
}

export default PublicationHistory;
