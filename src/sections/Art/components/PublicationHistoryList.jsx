function PublicationHistoryList({ publicationHistoryList }) {
  if (publicationHistoryList.length > 0) {
    return (
      <>
        <ul>
          {publicationHistoryList.map((historyItem, index) => (
            <li key={`${index}`}>{historyItem}</li>
          ))}
        </ul>
      </>
    );
  } else {
    return <></>;
  }
}

export default PublicationHistoryList;
