

const SubjectList = ({ artPiece }) => {
  return (
    <>
      {artPiece.subject_titles.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
    </>
  );
};

export default SubjectList;