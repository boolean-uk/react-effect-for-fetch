const FavouriteSlipsList = ({ favouriteSlips }) => {
    return (
        <section className="favourite-slips-list">
            <h3>Favorite Advice Slips</h3>
            <ul>
                {favouriteSlips.length > 0 ? (
                    favouriteSlips.map((slip, index) => (
                        <li key={index}>{slip}</li>
                    ))
                ) : (
                    <li>No favorite advice slips yet.</li>
                )}
            </ul>
        </section>
    );
};

export default FavouriteSlipsList;
