
export default function PublicationHistoryList({ item }) {
    return (
        <ul>
            {item.publicationHistory.map((history, index) => {
                return <li key={index}>{history}</li>
            })}
        </ul>
    )
}