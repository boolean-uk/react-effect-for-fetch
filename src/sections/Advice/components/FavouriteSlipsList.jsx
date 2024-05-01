export default function FavouriteSlipsList(props) {

    const { favourites } = props

    return (
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </section>
    )
}