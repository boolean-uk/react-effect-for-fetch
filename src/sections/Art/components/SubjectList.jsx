export default function SubjectList({ subjectTitles }) {
  if (subjectTitles.length > 0)
    return (
      <>
        <h4>Artistic Subjects:</h4>
        <ul>
          {subjectTitles.map((title, index) => (
            <li key={`Subject-title-${index}`}>{title}</li>
          ))}
        </ul>
      </>
    );
}
