
function FavouriteSlipsList({favouriteAdvices}) {

    return (
        <section className="favourtite-slips-list">
        {favouriteAdvices.length !== 0 ? (<h3>Favourite Advice Slips</h3>) : null}
        <ul>
          {
            favouriteAdvices.map(advice => (
              <li key={advice.id}>{advice.advice}</li>
            ))
          }
        </ul>
      </section>
    )
}

export default FavouriteSlipsList