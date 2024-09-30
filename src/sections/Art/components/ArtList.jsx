import ArtListItem from "./ArtListItem"

function ArtList({data}){
    console.log(data)
    return(
        <ul className="art-list">
          {data.map(art => (
            <ArtListItem key={art.id} data={art}/>
          ))}
        </ul>
    )
}

export default ArtList