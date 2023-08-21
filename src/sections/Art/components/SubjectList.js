function SubjectList(props) {
    // console.log(props.subjects);

    return (
        <ul>
            {props.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
            ))}
        </ul>
    );
}
export default SubjectList;
