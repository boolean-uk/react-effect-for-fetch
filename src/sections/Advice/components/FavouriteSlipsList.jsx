function FavouriteSlipsList({favoriteAdvices}){

    return (
        <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
            {favoriteAdvices.map((advice, index) =>
                <li key={index}>{advice.slip.advice}</li>
            )}
        </ul>
      </section>
    )
}

export default FavouriteSlipsList