export default function Subjects({artData}){
    return (
        <ul>
            {artData.subject_titles.map((subject, key) => {
                <li key={key}>{subject}</li>
            })}
        </ul>
    )
}