export default function PublicationHistoryList({ publicationHistory }) {
    return (
        <ul>
            {publicationHistory.map((entry, index) => (
                <li key={index}>{entry}</li>
            ))}
        </ul>
    )
}
