function PublicationHistoryList({ publicationHistory }) {
    return (
        <>
            <h4>Publication History:</h4>
            <ul>
                {publicationHistory.map((history, index) => (
                    <li key={index}>{history}</li>
                ))}
            </ul>
        </>
    );
}

export default PublicationHistoryList;
