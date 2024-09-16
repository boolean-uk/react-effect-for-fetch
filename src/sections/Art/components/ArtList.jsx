import ArtListItem from "./ArtListItem"

function ArtList( properties ){
    return(
    <ul className="art-list">
        <li>
            {properties.art.map((a, index) => (
                <ArtListItem key={index} index={index} a={a}
                art={properties.art} baseURL={properties.baseURL}/>
            ))}
      </li>
    </ul>
    )
}
export default ArtList

        