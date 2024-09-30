
function FavouriteSlipsList({favouritesList}) {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            {favouritesList.map((advice, key) => (
                <li key={key}>
                    <p>{advice.advice}</p>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList