function PublicationHistoryList({ painting }) {
  return (
    <ul>
      {painting.publicationHistory.map((row, index) => (
        <li key={index}>{row}</li>
      ))}
    </ul>
  );
}

export default PublicationHistoryList;
