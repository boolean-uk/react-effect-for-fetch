

function PublicationHistoryList({data}){
    return(
        <>
            <h4>Publication History:</h4>
            <ul>
                {data.map((publication, index) => (
                    <li key={index}>{publication}</li>
                ))}
            </ul>
        </>
    )
}

export default PublicationHistoryList