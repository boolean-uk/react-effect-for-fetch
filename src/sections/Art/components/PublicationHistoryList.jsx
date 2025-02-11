import PublicationHistoryListItem from "./PublicationHistoryListItem";

function PublicationHistoryList(props) {
  const publicationList = props.publicationList;

  return (
    <ul>
      {publicationList?.map((publication, index) => (
        <PublicationHistoryListItem key={index} publication={publication} />
      ))}
    </ul>
  );
}

export default PublicationHistoryList;
