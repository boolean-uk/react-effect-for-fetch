function PublicationHistoryList(props) {
  const listContent = props.publicationHistory.map((pub, i) =>
    <li key={i}>
      {pub}
    </li>  
  )
  return (
    <ul>
      {listContent}
    </ul>
  )
}

export default PublicationHistoryList
