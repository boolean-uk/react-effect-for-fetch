const SubjectList = ({ style_titles }) => {
    return (
        <>
            <h4>Artistic Subjects:</h4>
            <ul>
                {style_titles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </>
    );
};

export default SubjectList;
