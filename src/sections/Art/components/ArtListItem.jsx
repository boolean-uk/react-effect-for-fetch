import PropTypes from 'prop-types';
import PublicationHistoryList from './PublicationHistoryList';

const ArtListItem = ({ artwork }) => {
    return (
      <li>
        <div className="frame">
          <img
            src={artwork.image}
          />
        </div>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistory={artwork.publicationHistory} />
      </li>
    )
};

ArtListItem.propTypes = {
    artwork: PropTypes.object,
};

export default ArtListItem;