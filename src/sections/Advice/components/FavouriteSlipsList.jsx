/* eslint-disable react/no-unescaped-entities */
function FavouriteSlipsList(props) {
    return (
      <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
      {props.favorites.map((fav, i) =>
        <li key={i}>{fav.slip.advice}</li>
        )}
      </ul>
    </section>
  )
}

export default FavouriteSlipsList