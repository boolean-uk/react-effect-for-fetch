export default function PublicationHistoryList({art}) {
    return (
        <>
            <ul>
                {art.publicationHistory.map((publication, i) => (
                  <li key={i}>{publication}</li>
                ))}
            </ul>
        </>
    )
}