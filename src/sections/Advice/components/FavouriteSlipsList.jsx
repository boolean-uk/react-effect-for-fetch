const FavouriteSlipsList = ({favourites}) => {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            {favourites.map((advice, index) => (
            <li key={index}>
                <p>{advice}</p>
            </li>
            ))}
        </section>
    )
}
export default FavouriteSlipsList;