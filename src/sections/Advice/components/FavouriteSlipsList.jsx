export default function FavouriteSlipList({ favouriteSlipList }) {
  return (
    <>
      <ul>
        {favouriteSlipList.map((advice, i) =>(
          <li key={i}>{advice}</li>
        ))}
      </ul>
    </>
  );
}
