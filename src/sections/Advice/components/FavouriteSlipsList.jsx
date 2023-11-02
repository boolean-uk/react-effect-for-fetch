function FavouriteSlipsList({ faveAdvice }) {

    return (
        <section className="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {faveAdvice.map((someAdvice, index) =>
                    <li key={`${someAdvice}-${index}`}>{someAdvice}</li>
                )}
            </ul>
      </section>
    )
}

export default FavouriteSlipsList