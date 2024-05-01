export default function PublicationHistory({ artist }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {artist.publicationHistory.map((publication, i) => {
          return <li key={i}>{publication}</li>;
        })}
      </ul>
    </>
  );
}
