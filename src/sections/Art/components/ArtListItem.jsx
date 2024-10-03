import PublicationHistory from "./PublicationHistoryList"

function ArtListItem({artwork}){
    return(
        <li>
            <div className = "frame" >
                <img
                src = {"https://boolean-uk-api-server.fly.dev" + artwork.imageURL}
                />
            </div>
            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>
            <h4>Publication history</h4>
            <ul>
                {artwork.publicationHistory.map((p, i) => { 
                return <PublicationHistory key = {i} p = {p}/>
                })}
            </ul>
        </li>
    )
}

export default ArtListItem