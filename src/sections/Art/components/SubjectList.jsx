/* eslint-disable react/jsx-key */
function SubjectList(props) {

    const { art } = props

    return (
      <><h4>Artistic Subjects</h4>
       <ul>
            {art.subject_titles.map((subjectTitle) => {
                return (
                    <li>{subjectTitle}</li>
                )
            })}
        </ul></> 
    )
}

export default SubjectList