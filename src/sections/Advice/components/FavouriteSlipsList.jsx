export default function FavouriteSlipsList ( {favouriteAdvice}) {

    return (
        <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        {favouriteAdvice.length === 0 && <p>No favorites yet, idiot!</p>}
        <ul>
            {favouriteAdvice.map((advice, i) => {
                return (
                    <li key={i}>{advice}</li>
                )
            })}
        </ul>
      </section>
    )
}