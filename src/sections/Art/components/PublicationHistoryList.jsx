function PublicationHistory(props) {
  return (
    <ul>
      {props.artData.publicationHistory.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
export default PublicationHistory;
