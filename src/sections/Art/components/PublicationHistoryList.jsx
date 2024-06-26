export default function PublicationHistoryList({painting}) {
    return (
        <>
            <h4>Publication History:</h4>
                <ul>
                {painting.publicationHistory.map((info, index) =>
                    <li key={index}>{info}</li>)}
                </ul>
        </>
        
    )
}
