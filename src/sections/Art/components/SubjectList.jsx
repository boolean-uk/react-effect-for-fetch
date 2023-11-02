export default function SubjectList({ piece }) {
    return (
    <ul>
        {piece.subject_titles?.map((subject, index) => 
        <li key={index}>{subject}</li>
        )}
    </ul>
    )
}