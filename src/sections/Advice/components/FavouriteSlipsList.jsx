import React from "react";
import PropTypes from "prop-types";

function FavouriteSlipsList({ savedAdvice }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {savedAdvice.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;

FavouriteSlipsList.propTypes = {
  savedAdvice: PropTypes.array,
};
