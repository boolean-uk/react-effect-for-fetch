import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem({a, baseURL}){
    return (
        <><div className="frame">
            <img
                src={`${baseURL}/${a.imageURL}`} />
        </div><h3>{a.title}</h3>
        <p>Artist: {a.artist}</p>
        <PublicationHistoryList publicationHistory={a.publicationHistory}/>
        </>
    )
}
export default ArtListItem