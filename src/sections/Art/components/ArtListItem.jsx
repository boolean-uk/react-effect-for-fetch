import PublicationHistory from "./PublicationHistoryList";
import PropTypes from 'prop-types'

export default function ArtListItem(image)
{
  const baseURL = "https://boolean-api-server.fly.dev/"

  return (
    <>
    <li>
      <div className="frame">
        <img
        src={baseURL + image.image.imageURL}
        />
      </div>
      <h3>{image.image.title}</h3>
      <p>Artist: {image.image.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistory history={image.image.publicationHistory}/>
    </li>
    </>
  )
}

ArtListItem.propTypes =
{
  image: PropTypes.object
}