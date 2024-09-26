function PublicationHistoryList(props) {
    return (
        <>
        <h4>Publication History:</h4>
            <ul> 
                {props.art.publicationHistory}
            </ul>
        </>
    )
}

export default PublicationHistoryList
