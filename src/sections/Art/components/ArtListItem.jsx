
function ArtListItem({baseurl, art}) {
  return (
        <li>
              <div className="frame">
                <img
                  src={baseurl.concat(art.imageURL)}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {art.publicationHistory.map((pub, j) => {
                  return <li key={j}>{pub}</li>
                })}
              </ul>
        </li>
  )
}

export default ArtListItem