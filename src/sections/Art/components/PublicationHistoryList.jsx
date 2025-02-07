function PublicationHistoryList({ history }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {history.map((el, index) => {
          return (
            <li key={index}>
              <p>{el}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PublicationHistoryList;
