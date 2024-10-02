
export default function PublicationHistoryList({ art }) {

    return (


        <ul>
            {art?.publicationHistory?.length > 0 ? (
            art.publicationHistory.map((history, index) => (
            <li key={index}>{history}</li> 
            ))

    ) : (
        <li>No history available</li>
            
            )}
        </ul>

        
        
        
        
    )
}
