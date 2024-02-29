const FavouriteSlipsList = ({ favourites }) => {
    return (
        <>
        <h3>Favourite Advice Slips</h3>
            <ul>
                {favourites.map((favourite, index) => (
                    <li key={index}>{favourite.advice}</li>
                ))}
            </ul>
        </>
    );
}

export default FavouriteSlipsList;