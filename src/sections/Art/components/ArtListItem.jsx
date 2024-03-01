import PropTypes from "prop-types";

function ArtListItem({ baseURL, itemData }) {
  return (
    <>
      <div className="frame">
        <img src={baseURL + itemData.imageURL} />
      </div>
      <h3>{itemData.title}</h3>
      <p>Artist: {itemData.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {itemData.publicationHistory.map((publication, i) => (
          <li key={i}>{publication}</li>
        ))}
      </ul>
    </>
  );
}

ArtListItem.propTypes = {
  baseURL: PropTypes.string,
  itemData: PropTypes.object.isRequired,
};

export default ArtListItem;
