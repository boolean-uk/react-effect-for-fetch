
export default function PublicationHistoryList({ history }) {

  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {history.map((pub, i) => (
          <li key={i}>{pub}</li>
        ))}
      </ul>
    </>
  )
}
