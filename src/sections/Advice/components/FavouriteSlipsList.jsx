
function FavouriteSlipsList({favouriteAdvices}) {

    return (
        <section className="favourtite-slips-list">
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