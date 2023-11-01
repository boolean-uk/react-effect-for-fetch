function FavouriteSlipsList(props) {
    console.log("Favourites props:", props)
    return <section class="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
            <ul>
            {props.Favourites.map(item => <li>{item}</li>)}
            </ul>
        </section>
}

export default FavouriteSlipsList