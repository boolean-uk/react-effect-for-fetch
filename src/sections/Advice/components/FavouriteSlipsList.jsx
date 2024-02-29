export default function FavouriteSlipsList({ favs }) {
    return (
      <ul>
        {favs.map((fav, index) => (
          <li key={index}>
            <p className="favourit_p">{fav}</p>
          </li>
        ))}
      </ul>
    );
  }