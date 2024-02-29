import PropTypes from "prop-types"

function FavouriteSlipsList(props) {
  return (
    <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
            {props.favourites.map((fave, i) => (
                <li key={i}>{fave.slip.advice}</li>
            ))}
        </ul>
  </section>
  )
}

FavouriteSlipsList.propTypes = {
    favourites: PropTypes.array.isRequired
}

export default FavouriteSlipsList
