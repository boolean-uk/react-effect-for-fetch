export default function FavouriteSlipsList({ favouriteSlips }) {
    return (
        <section className="favourtite-slips-list">
            {
                favouriteSlips.length > 0 ? (
                    <div>
                        <h3>Favourite Advice Slips</h3>
                        <ul>
                            {
                                favouriteSlips.map((slip, index) => <li key={index}>{slip}</li>)
                            }
                        </ul>
                    </div>
                ) : null
            }
        </section>
    )
}