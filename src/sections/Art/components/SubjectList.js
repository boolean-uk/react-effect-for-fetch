function SubjectList(props){
    if (!props.artwork.subject_titles) {
        return null
    }
    return (
        <>
        <h4>Artistic Subjects:</h4>
        <ul>
          {props.artwork.subject_titles.map((subject, index) => (
            <li>
                {subject}
            </li>
          ))}
        </ul>
        </>
    )
}
export default SubjectList