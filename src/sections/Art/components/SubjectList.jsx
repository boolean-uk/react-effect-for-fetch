function SubjectList ({artPiece}) {

    return (
    <>
    {artPiece.subject_titles.map((titles) => 
                <li key={titles[1]}>{titles}</li>
            )}
    </>
    )
}

export default SubjectList