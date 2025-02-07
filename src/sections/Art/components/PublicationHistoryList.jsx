function PublicationHistory({ publicationHistory }) {
    return (
        <>
            <h4>Publication History:</h4>
            <ul>
                {publicationHistory.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </>
    );
}

export default PublicationHistory;
