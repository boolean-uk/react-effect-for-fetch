function SubjectList({ art }) {
    return art.subject_titles && art.subject_titles.length > 0
        ? (
            <>
                {art.subject_titles.map((subject) => (
                    <li key={subject}>{subject}</li>
                ))}
            </>
        )
        : <strong>no data found</strong>;
}

export default SubjectList;