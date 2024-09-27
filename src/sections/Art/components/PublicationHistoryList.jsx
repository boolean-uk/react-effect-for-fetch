const PublicationHistoryList = ({ publications }) => {
  return (
    <>
      {publications.map((publication, index) => (
        <li key={index}>{publication}</li>
      ))}
    </>
  );
};

export default PublicationHistoryList;
