function PublicationHistoryList({ publications }) {
  return (
    <ul>
      {publications.map((publication, index) => (
        <li key={index}>{publication}</li>
      ))}
    </ul>
  )
}

export default PublicationHistoryList