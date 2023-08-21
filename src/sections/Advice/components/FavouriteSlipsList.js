function FavouriteSlipsList(props) {
    const favouriteSlipsArray = Array.from(props.favouritesState);

    return (
        <section class="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favouriteSlipsArray.map((advice, index) => (
                    <li key={index}>{advice.advice}</li>
                ))}
            </ul>
        </section>
    );
}

export default FavouriteSlipsList;
