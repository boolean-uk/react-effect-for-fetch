function SubjectList(props) {
    return (
        <ul>
            {
                props.artwork.subject_titles.map((subject,index) => {
                    return <li key={index}>{subject}</li>
                })
            }
        </ul>
    )
}

export default SubjectList