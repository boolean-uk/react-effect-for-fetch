function PublicationHistoryList(props) {
  const { pubHistoryList } = props

  return (
    <>
      {pubHistoryList.map((pubHistoryItem, index) => (
        <li key={index}>{pubHistoryItem}</li>
      ))}
    </>
  );
}

export default PublicationHistoryList
