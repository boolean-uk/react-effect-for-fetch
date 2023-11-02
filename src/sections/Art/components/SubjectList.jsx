export default function SubjectList ({subjects}) {
  return (
    <ul>
      {subjects.map(subject => <li>{subject}</li>)}
  </ul>
  )
}