function FavouriteSlipList(props) {
    const favouriteSlips = props.favouriteSlips

    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            {favouriteSlips.map((favourite, index) => (
            <li key={index}>
                {favourite}
            </li>
            ))
            }
            </ul>
      </section>
    )
}

export default FavouriteSlipList