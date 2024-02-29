const FavouriteSlipsList = ({favouriteAdvice}) => {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            {favouriteAdvice?.map((entry, index)=> 
                <li key={index}>
                    <p>
                        {entry.advice}
                    </p>
                </li>
            )}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList