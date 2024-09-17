
function PublicationHistoryList({ artPiece }) {
    return (
        <ul>
            {artPiece.publicationHistory.map((sentence, sentenceIndex) => (
                <li key={sentenceIndex}>{sentence}</li>
            ))}
        </ul>
    )
}

export default PublicationHistoryList