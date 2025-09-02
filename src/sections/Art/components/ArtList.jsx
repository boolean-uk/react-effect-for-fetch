import ArtListItem from "./ArtListItem"


function ArtList({arts, baseurl}) {
  return (
    <ul className="art-list">
        {arts.map((art, i) => (
            <ArtListItem baseurl={baseurl} art={art} key={i}/>
        ))}
      </ul>
  )
}

export default ArtList