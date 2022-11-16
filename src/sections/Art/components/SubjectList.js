function SubjectList({ art }) {
  return (
    <ul>
      {art.classification_titles.map((title, index) => {
        return <li key={index}>{title}</li>;
      })}
    </ul>
  );
}
export default SubjectList;
