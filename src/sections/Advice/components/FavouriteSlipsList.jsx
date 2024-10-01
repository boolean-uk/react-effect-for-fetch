

export default function FavouriteSlipsList({favourites}){
    return (
        <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((advice, i)=> (
            <li key={i}>{advice}</li>
          ))}
        </ul>
      </section>
    )
}