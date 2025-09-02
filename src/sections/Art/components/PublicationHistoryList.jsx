function PublicationHistoryList({ publication }) {

    return (
        <>
        <ul>
            {publication.map((description, index) => (
                <li key={index}>{description}</li>
            ))}
        </ul>
        </>
    )
}

export default PublicationHistoryList;