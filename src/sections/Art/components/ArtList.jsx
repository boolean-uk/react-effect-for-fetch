import ArtListItem from './ArtListItem'

function ArtList({ artworks }) {
  return (
    <div className="art-list">
      {artworks.map((art) => (
        <ArtListItem key={art.id} art={art} />
      ))}
    </div>
  )
}

export default ArtList