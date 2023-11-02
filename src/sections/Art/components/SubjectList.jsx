function SubjectList({art}) {

    return(
        <>
        {art.subject_titles.map(subject =>(
                <li key={subject}>{subject}</li>
              ))}
        </>
    )
}

export default SubjectList