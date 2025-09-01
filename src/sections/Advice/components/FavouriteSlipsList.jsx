export default function FavouriteSlipsList( { favoriteAdvice } ){

  return(
      <ul>
        {favoriteAdvice.map((curr, index) => (
          <li key={ index }> { curr.slip?.advice } </li>
        ))}
      </ul>
  )
}
