function PublicationHistoryList(props) {
  return (
    <ul>
      {props.image.publicationHistory.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default PublicationHistoryList;
