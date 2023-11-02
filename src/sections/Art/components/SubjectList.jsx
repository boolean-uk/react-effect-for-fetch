function SubjectList({ artwork }) {

    return (
        <ul>
          {artwork.subject_titles.map((subject, index) => 
          <li key={`${subject}-${index}`}>{subject}</li>
          )}
        </ul>
    )
}

export default SubjectList