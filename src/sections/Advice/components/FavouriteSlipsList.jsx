
export default function FavouriteSlipsList({ favorites }) {
    return(
        <ul>
            {favorites.map((favorite, index) => 
              <li key={index}>
                <p>{favorite}</p>
              </li>
            )}
        </ul>
    )
}