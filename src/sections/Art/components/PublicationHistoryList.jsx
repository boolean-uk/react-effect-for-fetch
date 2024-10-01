export default function PublicationHistoryList(prop) {
    const { publicationHistoryList } = prop
  
    return (
      <ul>
        {publicationHistoryList && publicationHistoryList.map((ph, i) => (
          <li key={i}>{ph}</li>
        ))}
      </ul>
    );
  }