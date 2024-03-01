
function FavouriteSlipsList ({myFavourites}) {
    
    return(
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {myFavourites.length === 0 ? (
                    <p>No favourites yet</p>
                ): (
                //Rendering the advice list if it's not empty 
                   myFavourites.map((advice, index) =>
                   //And printing only the advice balue of the advice object
                    <li key={index}>{advice.advice}</li>)
                )}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList