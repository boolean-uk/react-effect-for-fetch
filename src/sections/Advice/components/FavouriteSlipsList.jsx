
export default function FavouriteSlipsList({ favouritesList}) {
  
  return (
    <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favouritesList && favouritesList.map((fav, i) => (
            <li key={i}>{fav.slip.advice}</li>
          ))}
        </ul>
      </section>
  )
}