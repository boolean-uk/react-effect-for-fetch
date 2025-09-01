function PublicationHistoryList(props) {
    const { publicationHistory } = props
  return (
    <>
    <h4>Publication history:</h4>
    <ul>
        {publicationHistory.map((ph, index) => (
        <li key={index}>
            {ph}
        </li>
        ))}
    </ul>
    </>
  )
}

export default PublicationHistoryList