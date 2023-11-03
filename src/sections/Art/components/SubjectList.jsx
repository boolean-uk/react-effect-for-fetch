function SubjectList({ artData }) {
  return (
    <ul>
      {artData.term_titles.map((term, index) => {
        return <li key={index}>{term}</li>;
      })}
    </ul>
  );
}
export default SubjectList;
