function SubjectList(props) {
    return (
        <ul>
            {props.item.subject_titles.map((title) =>
            <li>{title}</li>)}
        </ul>
    )
}
export default SubjectList