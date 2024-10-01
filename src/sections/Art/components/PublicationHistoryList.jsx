function PublicationHistoryList({ history }) {
  return (
    <ul>
      {history.map((entry, index) => (
        <li key={index}>{entry}</li>
      ))}
    </ul>
  )
}

export default PublicationHistoryList