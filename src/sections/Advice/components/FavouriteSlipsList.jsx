export default function FavouriteSlipsList({ favouriteAdvice }) {
    return (
        <section className="favourtite-slips-list">
            {favouriteAdvice.length > 0 && 
            <ul>
                {favouriteAdvice.map((advice, index) => {
                    return <li key={index}>{advice.slip.advice}</li>
                })}
            </ul>}
        </section>
        )
}