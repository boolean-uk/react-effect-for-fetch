export default function Subjects({artData}){
    return (
        <ul>
            {artData.term_titles.map((term, key) => (
                <li key={key}>{term}</li>
            ))}
        </ul>
    )
}