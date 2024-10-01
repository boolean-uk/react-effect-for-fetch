function FavouriteSlips({favouriteSlips}) {
    return (
        <div className='favourite-slips-list'>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favouriteSlips.length === 0 ? (
                    <p>No favourite advice slips yet.</p>
                ) : (
                    favouriteSlips.map((slip, i) => (
                        <li key={i}>{slip}</li>
                    ))
                )}
            </ul>
        </div>
    )
}export default FavouriteSlips;
