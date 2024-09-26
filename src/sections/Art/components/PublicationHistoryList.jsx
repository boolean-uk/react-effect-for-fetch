export const PublicationHistoryList = ({publicationHistory}) => {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {publicationHistory.map((publication, index) => (
            <li key={index}>{publication}</li>
        ))}
      </ul>
    </>
  );
}