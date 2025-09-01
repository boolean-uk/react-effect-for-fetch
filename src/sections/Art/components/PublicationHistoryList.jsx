
const PublicationHistoryList = ({publications}) => {
    return ( 
    <>
        <h4>Publication History:</h4>
        <ul>
            {publications.map(publication => (
                    <li key={publication}>{publication}</li>
                ))}
        </ul>
    </>

    )

}

export default PublicationHistoryList