import ArtListItem from "./ArtListItem";

function ArtList({data}) {
    return(
        <ul className="art-list">
        {data.map((artItem) => (
        <ArtListItem key={artItem.id} data = {artItem} />
        ))}
        </ul> 
    )
}

export default ArtList