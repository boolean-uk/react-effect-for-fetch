

function FavouriteSlipsList ({ favouriteAdvice }) {
    return (
        <section class="favourtite-slips-list">
        <h3>Favourite Advice Slips :</h3>
        <ul>
            {
            favouriteAdvice.map((advice, i) => (
                <li key={i}>{advice.slip.advice}</li>
            ))
            }
        </ul>
      </section>
    )
}

export default FavouriteSlipsList