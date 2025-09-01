const FavoriteSlipsList = ({savedAdvice}) => {


    return(
        <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
          <ul>
            {savedAdvice.map(advice =>  (
              <li key={advice}>{advice}</li>
            ))}
          </ul>
      </section>
    )
}

export default FavoriteSlipsList
