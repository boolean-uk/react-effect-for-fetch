import SubjectList from "./SubjectList"

export default function ArtListItem(props) {
  const { artwork } = props
  const artistName = artwork.artist_display.split('\n')[0]
  const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`

  return (
    <li>
      <div className="frame">
        <img src={ imageUrl } alt={ artwork.title } />
      </div>
      <h3>{ artwork.title }</h3>
      <p>Artist: { artistName }</p>
      {
        (artwork.subject_titles.length > 0) &&
          <SubjectList subjects={artwork.subject_titles} />
      }
    </li>
  )
}
