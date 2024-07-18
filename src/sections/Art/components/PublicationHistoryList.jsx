export default function PublicationHistory({ index }) {
  return (
    <ul>
      {index.publicationHistory.map((pHistory) => {
        return <li key={pHistory}>{pHistory}</li>;
      })}
    </ul>
  );
}
