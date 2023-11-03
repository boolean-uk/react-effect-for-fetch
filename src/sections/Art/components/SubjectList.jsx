export default function SubjectList ({subjects}) {
  return (
    <ul>
      {subjects.map((subject, index) => <li key={index}>{subject}</li>)}
  </ul>
  )
}