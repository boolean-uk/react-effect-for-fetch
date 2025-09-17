function PublicationHistoryList({ entries = [] }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {entries.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </>
  );
}

export default PublicationHistoryList;
