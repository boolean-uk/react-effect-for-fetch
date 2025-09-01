
function FavouriteSlipsList({ favourites }) {

    return (
        <>
        <h3>Favourite advice slips</h3>
        <ul className="favourites">
            {favourites.map((fav, index) => (
                <li key={index}>
                    {fav}
                </li>
            ))}
        </ul>
        </>
    )
}

export default FavouriteSlipsList