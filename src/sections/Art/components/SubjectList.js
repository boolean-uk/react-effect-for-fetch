export default function SubjectList(props) {
  const  { subjects } = props
  return (
    <>
      <h4>Artistic Subjects:</h4>
      <ul>
        {
          subjects.map((subject, index) => <li key={index}>{ subject }</li>)
        }
      </ul>
    </>
  )
}