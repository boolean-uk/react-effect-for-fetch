function FavouriteSlipsList(props) {
    return (
        <section className="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {props.slips.map((item, index) => (
                    <li key={index}> {item.advice} </li>
                ))}
            </ul>
        </section>
    );
}

export default FavouriteSlipsList;