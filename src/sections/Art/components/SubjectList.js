const SubjectList = ({ subjects }) => {
    return (
        <ul>
            {subjects.map(subject => (
                <li key={subject}>{subject}</li>
            ))}
        </ul>
    )
}

export default SubjectList