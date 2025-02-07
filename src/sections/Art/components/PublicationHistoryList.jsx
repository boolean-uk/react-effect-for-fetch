const PublicationHistoryList = ({ histories }) => {
  return (
    <div>
      <h2>Publication History</h2>
      <ul>
        {histories.map((publication) => (
          <li key={publication}>{publication}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicationHistoryList;
