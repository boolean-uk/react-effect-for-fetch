export default function PublicationHistoryList(props) {
  const { publicationHistory } = props;
  return publicationHistory.map((element, index) => (
    <li key={index}>{element}</li>
  ));
}
