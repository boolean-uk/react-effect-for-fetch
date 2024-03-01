import PropTypes from "prop-types";

function FavouriteSlipsList({ items }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

FavouriteSlipsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FavouriteSlipsList;
