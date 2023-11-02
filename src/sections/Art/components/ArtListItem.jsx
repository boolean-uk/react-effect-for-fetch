import SubjectList from "./SubjectList"

function ArtListItem({ artwork }) {

    const imgIIIF = "https://www.artic.edu/iiif/2"
    const imgURLEnd = "/full/843,/0/default.jpg"

    return (
        <li>
        <div className="frame">
          <img
            src={`${imgIIIF}/${artwork.image_id}${imgURLEnd}`}
          />
        </div>
        <h3>{artwork.title}</h3>
        <p>{artwork.artist_title}</p>
        <h4>Artistic Subjects:</h4>
        <SubjectList artwork={artwork} />
      </li>
    )
}

export default ArtListItem