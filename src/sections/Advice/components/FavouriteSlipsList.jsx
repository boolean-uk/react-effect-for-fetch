export default function FavouriteSlipsListComponent(props) {
    const { favourites } = props
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {
                    favourites.map((favourite, index) => (
                        <li>
                            {favourite}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}