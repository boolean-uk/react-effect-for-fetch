function ArtPublicationHistoryList({data}) {
    return(
    <ul>
        {data.map((historyItem, index) => (
        <li key={index}>{historyItem}</li>
        ))}
    </ul>
    )
    }

export default ArtPublicationHistoryList
