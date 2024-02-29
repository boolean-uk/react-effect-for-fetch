export function PublicationHistoryList({ a }) {
    return (
        <ul>
            {a.publicationHistory.map((pub, num) => {
                return <li key={num}>{pub}</li>;
            })}
        </ul>
    )
}