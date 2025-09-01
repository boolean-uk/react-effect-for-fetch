function PublicationHistoryList({ history }) {
    return (
        <ul>
            {history.map((pub, i) => (
                <li key={i}>{pub}</li>
            ))}
        </ul>
    );
}

export default PublicationHistoryList;
