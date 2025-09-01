import ArtListItem from "./ArtListItem"

function ArtList(props) {
    const { data, base_url } = props
  return (
    <ul className="art-list">
    {data.map((art, index) => (
        <ArtListItem
        key={index}
        art={art}
        base_url={base_url} />
        ))}
    </ul>
  )
}

export default ArtList