import ArtListItem from "./ArtListItem"


function ArtList ({art}) {

    return(
        <>
    <ul className="art-list">
        <ArtListItem art={art}/>
    </ul>
        </>
    )
}

export default ArtList