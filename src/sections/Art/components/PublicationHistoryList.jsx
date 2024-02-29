
const PublicationHistoryList = ({publicationHistory}) => {

    return (
        <ul>
            {publicationHistory?.map((publication, index) => 
                <li key={index}>{publication}</li>
            )}
        </ul>
    )
}

export default PublicationHistoryList