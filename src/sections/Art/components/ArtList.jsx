import ArtListItem from './ArtListItem'

function ArtList(props) {
  const listItems = props.artData.map(art =>
      <li key={art.id}>
        <ArtListItem art={art} baseURL={props.baseURL}/>
      </li>
    )

  return(
    <ul className="art-list">
      {listItems}
    </ul>
  )
}

export default ArtList