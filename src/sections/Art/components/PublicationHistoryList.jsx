
export default function PublicationHistoryList({publications}) {

  return (
    <ul>
      {publications.map((publ, i) => (
        <li key={i}>{publ}</li>
      ))}
    </ul>
  );
}
