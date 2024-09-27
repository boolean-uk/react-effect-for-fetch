function PublicationHistory({ artPiece }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {artPiece.publicationHistory.map((publication, index) => (
          <li key={index}>{publication}</li>
        ))}
      </ul>
    </>
  );
}
export default PublicationHistory;
