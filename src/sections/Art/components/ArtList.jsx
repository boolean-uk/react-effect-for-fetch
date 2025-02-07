import ArtListItem from './ArtListItem'
function ArtList(props)
{
    return(
        <ul className="art-list">
          {props.data.map(art => 
          <ArtListItem art={art}/>)}
        </ul>
    )
}

export default ArtList