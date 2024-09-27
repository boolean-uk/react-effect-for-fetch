import ArtListItem from "./ArtListItem"

function ArtList({ arts }) {

    return (
    <ul className="art-list">
        {
          arts.map(art => (
            <ArtListItem key={art.id} art={art} />
          ))
        }
      </ul>
    )
}

export default ArtList