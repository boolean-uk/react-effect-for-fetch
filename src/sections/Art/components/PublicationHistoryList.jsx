const PublicationHistoryList = ({ publicationHistory }) => {
    return (
        <ul>
            {publicationHistory.map((publication, i) => (
                <li key={i}>{publication}</li>
            ))}
        </ul>
    );
};

export default PublicationHistoryList;
