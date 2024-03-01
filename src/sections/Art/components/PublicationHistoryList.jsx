function PublicationHistoryList({ item }) {
    return (
      <ul>
        {item.publicationHistory.map((history, i) => (
          <li key={i}>{history}</li>
        ))}
      </ul>
    );
}

export default PublicationHistoryList