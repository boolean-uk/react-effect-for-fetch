const PublicationHistoryList = ({ art }) => {
    return (
        <>
            <h4>Publication History:</h4>
            <ul>
                {art.publicationHistory.map((entry, i) => (
                    <li key={i}>{entry}</li>
                ))}
            </ul>
        </>
    );
};

export default PublicationHistoryList;
