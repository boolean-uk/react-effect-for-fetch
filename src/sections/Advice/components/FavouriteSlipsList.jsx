import PropTypes from "prop-types";

export default function FavouriteSlipList({ favouriteAdvices }) {
  console.log("Inside fav ", favouriteAdvices);
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favouriteAdvices.map((advice, i) => (
          <li key={i}>{advice}</li>
        ))}
      </ul>
    </section>
  );
}

FavouriteSlipList.propTypes = {
  FavouriteSlipList: PropTypes.array,
};
