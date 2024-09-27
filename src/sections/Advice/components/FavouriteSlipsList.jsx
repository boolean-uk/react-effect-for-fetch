function FavouriteSlipsList({favourites}){
    return (
        <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((item, index) =>{
            return(
              <li key={index}>{item.slip.advice}</li>
            )
          })}
        </ul>
      </section>
    )
}

export default FavouriteSlipsList