export default function SubjectList({ piece }) {
    return (
    <ul>
        {piece.subject_titles?.map((subject, idx) => 
        <li key={idx}>{subject}</li>
        )}
    </ul>
    )
}