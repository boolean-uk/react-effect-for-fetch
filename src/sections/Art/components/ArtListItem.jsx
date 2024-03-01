import PropTypes from "prop-types";
import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ art }) {
  const url = "https://boolean-api-server.fly.dev";
  return (
    <li>
      <div className="frame">
        <img src={`${url + art.imageURL}`} alt={art.title} />
      </div>

      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Artistic Subjects: </h4>
      <PublicationHistoryList publications={art.publicationHistory} />
    </li>
  );
}

ArtListItem.propTypes = {
  art: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    publicationHistory: PropTypes.array.isRequired,
  }).isRequired,
};
