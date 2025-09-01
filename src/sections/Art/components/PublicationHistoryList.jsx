
export default function PublicationHistoryList({publicationHistory}){


    return(<>
    
        {publicationHistory.map((publication, i)=>(
            
            <li key={i}> {publication}</li>))}
        
        
        </>)
}