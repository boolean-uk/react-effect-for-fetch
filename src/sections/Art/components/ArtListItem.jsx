import PropTypes from "prop-types";
import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ artItem }) {
  return (
    <li>
      <div className="frame">
        <img
          src={"https://boolean-uk-api-server.fly.dev/" + artItem.imageURL}
        />
      </div>
      <h3>{artItem.title}</h3>
      <p>{artItem.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {artItem.publicationHistory.map((string, i) => (
          <PublicationHistoryList key={i} pubHisList={string} />
        ))}
      </ul>
    </li>
  );
}

ArtListItem.propTypes = {
  artItem: PropTypes.shape({
    artist: PropTypes.string,
    id: PropTypes.number,
    imageURL: PropTypes.string,
    publicationHistory: PropTypes.array,
    title: PropTypes.string,
  }),
};
