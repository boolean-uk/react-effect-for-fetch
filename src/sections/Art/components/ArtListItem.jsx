import SubjectList from "./SubjectList"

export default function ArtListItem({item, artConfig}) {
  const image = item.image_id? `${artConfig.iiif_url}/${item.image_id}/full/843,/0/default.jpg` : "https://dino-chrome.com/static/images/dino.jpg"
  console.log('item', item)
  return (
    <li>
    <div className="frame">
      {!item.image_id && <p>Image not found</p>}
      <img src={image} alt={item.title} />
    </div>
    <h3>{item.title}</h3>
    <p>Artist: {item.artist_title ? item.artist_title : "Unknown"}</p>
    <SubjectList subjectTitles={item.subject_titles}></SubjectList>
  </li>
  )
}