function SubjectList({ subjects }) {
  return (
    <ul>
      {subjects.map((sub, index) => {
        return <li key={index}>{sub}</li>;
      })}
    </ul>
  );
}

export default SubjectList;
