function FavouritesList({ favourites }) {
  return (
      <ul>
          {favourites.map((advice, index) => <li key={index}>{advice}</li>)}
      </ul>
  )
}

export default FavouritesList