import ArtListItem from "./ArtListItem"

export default function ArtList(props) {
  const { artworks } = props

  return (
    <ul className="art-list">
      {
        artworks.map(artwork => <ArtListItem artwork={artwork} key={artwork.id} />)
      }
    </ul>
  )
}